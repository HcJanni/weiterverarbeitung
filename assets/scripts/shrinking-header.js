// JavaScript Document

// SHRINKING HEADER EFFEKT beim scrollen von https://codepen.io/tomdurkin/pen/nvAjd

$(function() {
  var shrinkHeader = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $('#navbar').addClass('shrink');
    } else {
      $('#navbar').removeClass('shrink');
    }
    if (scroll >= shrinkHeader) {
      $('#burger').addClass('shrink');
    } else {
      $('#burger').removeClass('shrink');
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});
