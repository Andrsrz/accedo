/**
 * Create a slideshow with fadeIn and fadeOut transitions
 * The slideshow should start automatically and it should use
 * fade effect when transitions to a new image
 */

document.addEventListener('DOMContentLoaded', () => {
  // Getting slideshow element
  const mySlide = document.querySelector('#mySlide');

  // Calling plugin
  window.SlideShow(mySlide, 4);
});
