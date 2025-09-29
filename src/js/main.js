import $ from 'jquery';
import Flickity from 'flickity';
import 'foundation-sites/dist/js/foundation.js';

// Make jQuery globally available
window.$ = $;
window.jQuery = $;

// Initialize foundation
$(document).foundation();

// Initialize testimonials slider
new Flickity( '.testimonials__slider', {
  cellAlign: 'left',
  wrapAround: true,
  groupCells: true,
  prevNextButtons: false,
  pageDots: false,
  autoPlay: 3000,
});