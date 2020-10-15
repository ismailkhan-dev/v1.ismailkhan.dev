// namespace object
const app = {};

// initialize app
app.init = function () {
  console.log("hello world");

  // import overlay menu
  $(".response--main-navigation").basicResponsiveMenu({
    browserWidth: 960,
    animate: "true",
    slideDir: "right",
    slideSpeed: 500,
  });
};

// doc ready
$(function () {
  app.init();
});
