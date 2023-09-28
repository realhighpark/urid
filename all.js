const nav_toggle =document.querySelector('.nav_toggle')
const gnb =document.querySelector('.gnb')
const gGuide =document.querySelector('.g-guide')


nav_toggle.addEventListener('click',()=>{
    gnb.classList.toggle('active');
    gGuide.classList.toggle('active');
    nav_toggle.classList.toggle('active');
});


const tab_toggle_1 = document.querySelector('.tab-con-1')
const tab_toggle_2 = document.querySelector('.tab-con-2')
const tab_toggle_3 = document.querySelector('.tab-con-3')
const tabBox_1 = document.querySelector('.plan-box-in-1')
const tabBox_2 = document.querySelector('.plan-box-in-2')
const tabBox_3 = document.querySelector('.plan-box-in-3')


function clickTab(event, tab) {
    var previous = document.getElementsByClassName('p1-tab-onclick')[0];
    var clicked = document.getElementsByClassName(tab)[0];
    
    if(previous) {
        previous.classList.remove('p1-tab-onclick')
    }
    clicked.classList.add('p1-tab-onclick');
}
document.getElementById('activeFirst').click();

tab_toggle_1.addEventListener('click', () => { 
    if (!tabBox_1.classList.contains('plan-box-display-block')) {
        tabBox_1.classList.remove('plan-box-display-none')
        tabBox_1.classList.add('plan-box-display-block')
    } 
    if (!tabBox_2.classList.contains('plan-box-display-none')) {
        tabBox_2.classList.remove('plan-box-display-block')
        tabBox_2.classList.add('plan-box-display-none')
    } 
    if (!tabBox_3.classList.contains('plan-box-display-none')) {
        tabBox_3.classList.remove('plan-box-display-block')
        tabBox_3.classList.add('plan-box-display-none')
    } 
})

tab_toggle_2.addEventListener('click', () => { 
    if (!tabBox_1.classList.contains('plan-box-display-none')) {
        tabBox_1.classList.remove('plan-box-display-block')
        tabBox_1.classList.add('plan-box-display-none')
    } 
    if (!tabBox_2.classList.contains('plan-box-display-block')) {
        tabBox_2.classList.remove('plan-box-display-none')
        tabBox_2.classList.add('plan-box-display-block')
    } 
    if (!tabBox_3.classList.contains('plan-box-display-none')) {
        tabBox_3.classList.remove('plan-box-display-block')
        tabBox_3.classList.add('plan-box-display-none')
    } 
})

tab_toggle_3.addEventListener('click', () => { 
    if (!tabBox_1.classList.contains('plan-box-display-none')) {
        tabBox_1.classList.remove('plan-box-display-block')
        tabBox_1.classList.add('plan-box-display-none')
    } 
    if (!tabBox_2.classList.contains('plan-box-display-none')) {
        tabBox_2.classList.remove('plan-box-display-block')
        tabBox_2.classList.add('plan-box-display-none')
    } 
    if (!tabBox_3.classList.contains('plan-box-display-block')) {
        tabBox_3.classList.remove('plan-box-display-none')
        tabBox_3.classList.add('plan-box-display-block')
    }
})