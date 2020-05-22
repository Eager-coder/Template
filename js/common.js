
// Navogation menu
export function openNav(){
    const burgerBtn = document.querySelector('.burger');
    const navSlider = document.querySelector('.nav-slider');
    const line1 = burgerBtn.querySelector('.line1');
    const line2 = burgerBtn.querySelector('.line2');
    const line3 = burgerBtn.querySelector('.line3');
    burgerBtn.addEventListener('click', ()=> {
        navSlider.classList.toggle('nav-slider-active');
        burgerBtn.classList.toggle('burger-active');
        line1.classList.toggle('l1');
        line2.classList.toggle('l2');
        line3.classList.toggle('l3');
    
    });
}
