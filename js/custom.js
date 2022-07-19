$("#yellow-color").click(function (e) {
  $(".main-wrapper-resume").attr("id", "yellow");
});
$("#red-color").click(function (e) {
  $(".main-wrapper-resume").attr("id", "red");
});
$("#blue-color").click(function (e) {
  $(".main-wrapper-resume").attr("id", "blue");
});
$("#green-color").click(function (e) {
  $(".main-wrapper-resume").attr("id", "green");
});

$(document).ready(function () {
  $(".setting-icon").click(function () {
    $(".color-box").toggleClass("main");
  });
});

$(document).ready(function () {
  $(".socials-text").click(function () {
    $(".socialicons").toggleClass("main");
  });
});

$(function() {
  $('li').css('cursor', 'pointer')

  .click(function() {
      window.location = $('a', this).attr('href');
      return false;
  });
});