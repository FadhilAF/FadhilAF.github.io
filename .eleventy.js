module.exports = function (eleventyConfig) {
  // Copy `src/assets/` to `dist/assets` we need to tell Eleventy to copy the directory to the output.
  // For all static files
  eleventyConfig.addPassthroughCopy("src/assets/js/script.js");
  eleventyConfig.addPassthroughCopy("src/assets/svg");
  eleventyConfig.addPassthroughCopy("src/blog/assets/img");
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon": "/"});
  //For tailwind's CSS file we don't need to copy it because tailwind handle it
  //Also for soon to be bundled JS file we don't need to copy it because it will be bundled

  // add custom filter. Also, date data even though we input it as a "yyyy-mm-dd" string, it will be converted to a date object automatically
  eleventyConfig.addFilter("formatDate", (date) => formatDate((date)));

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

// How to save backend API keys on .env with 11ty
// https://github.com/11ty/eleventy/issues/782#issuecomment-1066005227
//
//
//
function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return [date.getDate(), months[date.getMonth()], date.getFullYear()].join(" ");
}
