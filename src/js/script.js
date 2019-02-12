var navItem = document.querySelectorAll('.header__nav__item');
var body = document.getElementById('body');

// open mobile menu when clicking on mobile nav icon
document.getElementById('js-toggle-mobile-nav').onclick = function() {
  body.classList.toggle('open-menu');
};

// close mobile menu when clicking on a nav item
for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function() {
    console.log('clicked');

    if (body.classList.contains('open-menu')) {
      console.log('has-open-menu');
      body.classList.remove('open-menu');
    }
  });
}

// scroll when clicking the introduction arrow
document.getElementById('js-start-scrolling').onclick = function() {
  document.getElementById('services').scrollIntoView({behavior: "smooth"});
};

// keeptrack
document.addEventListener("DOMContentLoaded", function() {
  var header = document.getElementById('header');
  var waypointInit = new KeepTrack(header);
});
