$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
     setTimeout(
  function() 
  {
  $("html, body").animate({ scrollTop: 0 }, "fast");
  return false;
    //do something special
  }, 500);
     
});