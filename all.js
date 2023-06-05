const nav_toggle =document.querySelector('.nav_toggle')
const gnb =document.querySelector('.gnb')
const gGuide =document.querySelector('.g-guide')


nav_toggle.addEventListener('click',()=>{
    gnb.classList.toggle('active');
    gGuide.classList.toggle('active');
    nav_toggle.classList.toggle('active');
});