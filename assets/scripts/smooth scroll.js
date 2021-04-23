    // add event listener on load
        window.addEventListener('load', function() {

  // scroll into view
  var btns = document.querySelectorAll('.scrollwrap');
  for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.wrapper').scrollIntoView({
        behavior: 'smooth'
      });
      document.getElementById("wrap").scrollTop -= 100;
    });
  }
      
      
      document.querySelector('.scrolldown').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.wrapper').scrollIntoView({ behavior: 'smooth' });
      });
      
      // scroll to top
      document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: document.body.clientHeight - window.innerHeight, top: 0, left: 0, behavior: 'smooth' });
      });

    });