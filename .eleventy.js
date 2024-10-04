module.exports = function (eleventyConfig) {
  // Copy `src/assets/` to `dist/assets` we need to tell Eleventy to copy the directory to the output.
  // For all static files
  eleventyConfig.addPassthroughCopy("src/assets/js/script.js");
  //For tailwind's CSS file we don't need to copy it because tailwind handle it
  //Also for soon to be bundled JS file we don't need to copy it because it will be bundled

  return {
    dir: {
      input: "src",
      data: "_data",
      // Folder for templates that can be included in other templates
      includes: "_includes",
      layouts: "_layouts",
      output: "dist",
    },
  };
};
