'use strict';

const pagination = require('hexo-pagination');
const { readFile, readFileSync, readdirSync } = require('hexo-fs');
const { sep, join, dirname } = require('path');
const yaml = require('js-yaml');

// == local variables ==

JSON.safeStringify = (obj, indent = 2) => {
  let cache = [];
  const retVal = JSON.stringify(
    obj,
    (key, value) =>
      typeof value === "object" && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
    indent
  );
  cache = null;
  return retVal;
};

hexo.on('ready', function() {
  hexo.locals.set('hierarchies', function() {
    const hierarchyPath = join(hexo.source_dir, 'hierarchy.yml');
    const hierarchyData = yaml.load(readFileSync(hierarchyPath), {schema: yaml.JSON_SCHEMA});

    const rootHier = hierarchyData.rootHierarchy;

    const gatherAllLeafNode = function(node, depth) {
      const nodeName = node.name;
  
      // check for node children
      if ("children" in node) {
        let result = node.children.map((node) => {
          return gatherAllLeafNode(node, depth+1);
        });
        return result.reduce((prev, curr) => {
          return prev.concat(curr);
        });
      } else {
        // leaf node, gather articles
        return [nodeName];
      }
    };

    const allLeafNodes = gatherAllLeafNode(rootHier, 0);
    console.log("All leaf tags: [" + allLeafNodes.join(", ") + "]");

    hierarchyData.leafNodes = {};
    allLeafNodes.forEach((leafName) => {
      hierarchyData.leafNodes[leafName] = [];
    });

    return hierarchyData;
  });

  hexo.locals.set('paperSources', function() {
    const paperSrcDir = join(hexo.source_dir, 'paperSources') + sep;
    const srcYamlFilenames = readdirSync(paperSrcDir);

    let paperSources = {};
    srcYamlFilenames.forEach((name) => {
      paperSources[name.replace(".yml", "")] = yaml.load(
        readFileSync(join(paperSrcDir, name)),
        {schema: yaml.JSON_SCHEMA}
      );
    });

    return paperSources;
  });

  // console.log(hexo.locals.post);

  // key: papertitle; value: {path: sth}
  hexo.locals.set('paperMeta', {});
});

hexo.extend.filter.register('before_post_render', function(data) {
  if ('layout' in data && data.layout == "paper-reading") {
    const requiredAttrs = ['papertitle', 'paperauthors', 'papersource', 'paperurl', 'papertags'];
    requiredAttrs.forEach((attrName) => {
      if (!(attrName in data)) {
        console.error("Expected attribute %s for post %s", attrName, data.path);
        throw new Error("paperMeta validation: Expected attribute " + attrName + " for post " + data.path);
      }
    });

    const paperTitle = data.papertitle;
    const paperPath = data.path;
    const paperSource = data.papersource;
    const paperTags = data.papertags.split(",").map(x => x.trim());
    const paperURL = data.paperurl;

    let logOutput = "";
    logOutput += 'Paper: ' + paperTitle + "\n";
    logOutput += '- Path: ' + paperPath + "\n";
    logOutput += '- Source: ' + paperSource + "\n";
    logOutput += '- Tags: ' + paperTags + "\n";
    logOutput += '- URL: ' + paperURL + "\n";
    console.log(logOutput);

    // Paper validations:
    // 1. The paper must be present in paper sources database
    const paperSrcDb = hexo.locals.get('paperSources');
    if (!(paperSource in paperSrcDb)) {
      console.error("Unknown conference %s for paper %s", paperSource, paperTitle);
      throw new Error(
        "paperMeta validation: Unknown conference " + 
        paperSource + " for paper " + paperTitle
      );
    }
    const allSelectedConfPapers = paperSrcDb[paperSource].papers;
    if (allSelectedConfPapers == null) {
      console.error("Source database for conference %s is empty", paperSource, paperTitle);
      throw new Error(
        "paperMeta validation: Source database for conference " + 
        paperSource + " is empty; (checking for paper " + paperTitle + ")"
      );
    }

    let allPapers = [];
    Object.keys(allSelectedConfPapers).forEach((year) => {
      allPapers = allPapers.concat(allSelectedConfPapers[year].map((x => x.name)));
    });

    // console.log(allPapers);
    if (!(allPapers.includes(paperTitle))) {
      console.error(
        "Paper '%s' is not in conference %s's source paper list", paperTitle, paperSource
      );
      console.log("Note: list of papers in %s:\n%s", paperSource, allPapers);
      throw new Error(
        "paperMeta validation: Paper '" + paperTitle + "' is not in conference " + 
        paperSource + "'s source paper list"
      );
    }

    // Tag validations:
    // 1. EVERY paper must belong to >= 1 tag
    // 2. the tag is an leaf tag
    const hierarchy = hexo.locals.get('hierarchies');
    
    paperTags.forEach((tagName) => {
      if (!(tagName in hierarchy.leafNodes)) {
        console.error("Tag %s for paper %s is not in hierarchy leaf nodes", tagName, paperTitle);
        throw new Error("paperMeta validation: Tag " + tagName + " for paper " + paperTitle + " is not in hierarchy leaf nodes");
      }

      hierarchy.leafNodes[tagName].splice(0, 0, {
        title: paperTitle,
        path: paperPath,
        source: paperSource,
        tags: paperTags,
        url: paperURL
      });
    });

    hexo.locals.set('hierarchies', hierarchy);

    const oldMeta = hexo.locals.get('paperMeta');
    if (paperTitle in oldMeta) {
      console.error(
        "Paper [" + paperTitle + "] has duplicate occurances. Current: " +
        paperPath + ", Previous: " + oldMeta[paperTitle].path
      );
      throw new Error("paperMeta validation: duplicate paper with title=" + paperTitle);
    }

    oldMeta[paperTitle] = {
      path: paperPath,
      source: paperSource,
      tags: paperTags,
      url: paperURL
    };

    hexo.locals.set('paperMeta', oldMeta);
  }
  // console.log(data.papertitle);
});

hexo.extend.filter.register('template_locals', function(locals){
  locals.paperSources = hexo.locals.get('paperSources');
  locals.getYearInSources = function (paperTitle, paperConf) {
    const paperSrcDb = hexo.locals.get('paperSources');
    // console.log(paperSrcDb);
    const allSelectedConfPapers = paperSrcDb[paperConf].papers;
    let paperYear = -1;
    Object.keys(allSelectedConfPapers).forEach((year) => {
      allSelectedConfPapers[year].forEach((paperObj) => {
        if (paperObj.name == paperTitle) {
          paperYear = year;
        }
      })
    });

    if (paperYear == -1) {
      console.error(
        "Paper '%s' is not in conference %s's source paper list", paperTitle, paperConf
      );
      throw new Error(
        "Modify template locals: Paper '" + paperTitle + "' is not in conference " + 
        paperConf + "'s source paper list"
      );
    }

    return paperYear;
  };
  return locals;
});

// == Sources ==

hexo.extend.generator.register('source-all', function(locals) {
  // Object.keys(locals.paperSources).forEach(function (srcName) {

  // });
  // console.log("SER: " + JSON.safeStringify(locals.paperSources));
  return {
    path: 'paper-sources.html',
    data: {
      content: "Serialized: " + JSON.safeStringify(locals.paperSources),
      paperSources: locals.paperSources,
      paperMeta: locals.paperMeta
    },
    layout: ['paper-sources', 'page']
  };
});

hexo.extend.generator.register('hierarchy-all', function(locals) {
  // Object.keys(locals.paperSources).forEach(function (srcName) {

  // });
  // console.log(locals.hierarchies.leafNodes);
  return {
    path: 'hierarchies.html',
    data: {
      path: "hierarchies.html",
      content: "Serialized: " + JSON.safeStringify(locals.hierarchies),
      hierarchies: locals.hierarchies
    },
    layout: ['hierarchies', 'page']
  };
});

// hexo.extend.generator.register('browse-by-sources', function(locals) {
//     // Filter out all paper reading pages
//     const paperReadingPosts = locals.posts.filter((val, idx) => val.layout == 'paper-reading');
//     // console.debug(paperReadingPosts);

//     // pagination can generate things like posts, prev & next, which
//     // is useful for theme rendering
//     return pagination("/paper-summary", paperReadingPosts, {
//         perPage: 20,
//         layout: ['paper-summary']
//     });

//     // return {
//     //     path: "/paper-summary.html",
//     //     data: paperReadingPosts,
//     //     layout: ['paper-summary']
//     // };

// });

// hexo.extend.generator.register('paper-index', function(locals) {
//     const config = this.config;
//     const perPage = config.category_generator.per_page;
//     const paginationDir = config.pagination_dir || 'page';
//     const orderBy = config.category_generator.order_by || '-date';
  
//     return locals.categories.reduce((result, category) => {
//       if (!category.length) return result;
  
//       const posts = category.posts.sort(orderBy);
//       const data = pagination(category.path, posts, {
//         perPage,
//         layout: ['category', 'archive', 'index'],
//         format: paginationDir + '/%d/',
//         data: {
//           category: category.name
//         }
//       });
  
//       return result.concat(data);
//     }, []);
// });