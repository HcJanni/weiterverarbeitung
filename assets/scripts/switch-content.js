// JavaScript Document

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