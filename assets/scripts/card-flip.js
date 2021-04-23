// JavaScript Document
$('.flip-container .flipper button').click(function() {
  // flip back previous hovered element
  $('.flip-container.hover').toggleClass('hover');
  // flip current element
  $(this).closest('.flip-container').toggleClass('hover');
});

$('.fbutton').click(function() {
  // flip current element
  $(this).closest('.flip-container').removeClass('hover');
});