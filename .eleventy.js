module.exports = function(eleventyConfig) {
	  // Add a collection for laptop listings
  eleventyConfig.addCollection("laptops", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/laptops/*.md");
  });
  // Copy images to output folder
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
