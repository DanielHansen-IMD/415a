module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addWatchTarget('./src/sass');
    return {
      passthroughFileCopy: true,
      dir: {
        input: "src",
        output: "public"
      }
    }
  }