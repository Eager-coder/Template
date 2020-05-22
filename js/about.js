import {openNav} from './common.js';
// Navigation 
openNav();

// Carousel
const carousel = document.querySelector('.carousel-container');
const carouselItem = carousel.querySelector('.member');
const prevBtn = document.querySelector('.chevron-left');
const nextBtn = document.querySelector('.chevron-right');
const getHeight = function(){
    return carouselItem.clientWidth 
};
// setInterval(getHeight, 500);

prevBtn.addEventListener('click', ()=> carousel.scrollLeft -= getHeight())
nextBtn.addEventListener('click', ()=> carousel.scrollLeft += getHeight())