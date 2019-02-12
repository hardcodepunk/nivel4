document.getElementById('js-toggle-mobile-nav').onclick = function() {
  document.getElementById('body').classList.toggle('open-menu');
}

document.getElementById('js-start-scrolling').onclick = function() {
  document.getElementById('services').scrollIntoView({behavior: "smooth"});
}
