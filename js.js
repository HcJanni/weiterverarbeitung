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
  var shrinkHeader = 50;
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
  });
}




let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav'),
	 slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});



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



