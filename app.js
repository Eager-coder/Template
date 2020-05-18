const backgrounds = Array.from(document.querySelectorAll('.image'));

backgrounds.forEach((e, index)=>{
   e.style.background = `linear-gradient(90deg, rgba(0, 0, 0, 0.445), rgba(0, 126, 243, 0.6)), url(../images/g${index+1}.jpg)`;
   e.style.backgroundPosition = 'top';
   e.style.backgroundSize = 'cover';
   e.parentElement.addEventListener('mouseover', ()=>{
       e.style.backgroundPosition = 'center';
   })
   e.parentElement.addEventListener('mouseout', ()=>{
    e.style.backgroundPosition = 'top';
})
})

