const nav =document.querySelector('nav');
const hamburgerIcon=  document.querySelector('#hamburger_img');

const ul_links=  document.querySelector('.nav-links');
hamburgerIcon.addEventListener('click',(e)=>{
    ul_links.classList.toggle('toggle_nav_link_display');
    console.log(hamburgerIcon)
  
});