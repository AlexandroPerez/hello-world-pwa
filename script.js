document.addEventListener('DOMContentLoaded', event => {
  // On any page, the title of the header redirects to home page
  header = document.querySelector('header h1');
  header.onclick = function() {
    console.log('hello world!');
  };

  // active page doesn't redirect
  let active = document.querySelector('nav a.active');
  active.onclick = function(e) {
    e.preventDefault();
  };
})