module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
// Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addWatchTarget("./src/**/*.html");
  eleventyConfig.addWatchTarget("./src/**/*.js");
  eleventyConfig.addWatchTarget("./src/images");
  eleventyConfig.addWatchTarget("./src/fonts");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
