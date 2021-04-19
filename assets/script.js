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



//$(function () {
//$(document).scroll(function () {
//var $nav = $(".navbar-fixed-top");
//$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//});
//});





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



$(window).on("load",function() {
 this.fade(true); //fade elements on page-load
  $(window).scroll(function(){this.fade(false);}); //fade elements on scroll
});

//Take below fade method outside of the load event listener.

  function fade(pageLoad) {
    var windowTop=$(window).scrollTop(), windowBottom=windowTop+$(window).innerHeight();
    var min=0, max=1, threshold=0.01;
    
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectHeight=$(this).outerHeight(), objectTop=$(this).offset().top, objectBottom=$(this).offset().top+objectHeight;
      
      /* Fade element in/out based on its visible percentage */
      if (objectTop < windowTop) {
        if (objectBottom > windowTop) {$(this).fadeTo(0,min+((max-min)*((objectBottom-windowTop)/objectHeight)));}
        else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
      } else if (objectBottom > windowBottom) {
        if (objectTop < windowBottom) {$(this).fadeTo(0,min+((max-min)*((windowBottom-objectTop)/objectHeight)));}
        else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
      } else if ($(this).css("opacity")<=max-threshold || pageLoad) {$(this).fadeTo(0,max);}
      
    });
  }

    
// change activenav class, show the clicked element only and hide the others https://codepen.io/MohdHussein/pen/MWKEvdp


// grab all the buttons
let Buttons = document.querySelectorAll(".selectSection button");

// loop through the buttons using for..of 
for (let button of Buttons) {
  // listen for a click event 
  button.addEventListener('click', (e) => {
    // et = event target
    const et = e.target;
    // slect activenav class
    const activenav = document.querySelector(".activenav");
    // check for the button that has activenav class and remove it
    if (activenav) {
      activenav.classList.remove("activenav");
    }
    // add activenav class to the clicked element 
    et.classList.add("activenav");

    // select all classes with the name content
    let allContent = document.querySelectorAll('.contentsec');

    // loop through all content classes
    for (let contentsec of allContent) {
      // display the content if the class has the same data-attribute as the button 
      if (contentsec.getAttribute('data-number') === button.getAttribute('data-number')) {
        contentsec.style.display = "block";
      }
      // if it's not equal then hide it.
      else {
        contentsec.style.display = "none";
      }
    }
    this.fade(true); //Call fade method on click 
  });
}
   




let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav'),
	 slowmo = document.getElementById('slowmo');
   
burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

$(".main-nav").click(function(){
  burger.click();
})



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




$(window).on("load",function() {
  function fade(pageLoad) {
    var windowTop=$(window).scrollTop(), windowBottom=windowTop+$(window).innerHeight();
    var min=0, max=1, threshold=0.01;
    
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectHeight=$(this).outerHeight(), objectTop=$(this).offset().top, objectBottom=$(this).offset().top+objectHeight;
      
      /* Fade element in/out based on its visible percentage */
      if (objectTop < windowTop) {
        if (objectBottom > windowTop) {$(this).fadeTo(0,min+((max-min)*((objectBottom-windowTop)/objectHeight)));}
        else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
      } else if (objectBottom > windowBottom) {
        if (objectTop < windowBottom) {$(this).fadeTo(0,min+((max-min)*((windowBottom-objectTop)/objectHeight)));}
        else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
      } else if ($(this).css("opacity")<=max-threshold || pageLoad) {$(this).fadeTo(0,max);}
    });
  } fade(true); //fade elements on page-load
  $(window).scroll(function(){fade(false);}); //fade elements on scroll
});






$('a[href^="#"]').on('click',function(e) {
 e.preventDefault();
 var target = this.hash;
 var $target = $(target);
 $('html, body').stop().animate({
  'scrollTop': $target.offset().top
 }, 900, 'swing', function () {
  window.location.hash = target;
 });
});
