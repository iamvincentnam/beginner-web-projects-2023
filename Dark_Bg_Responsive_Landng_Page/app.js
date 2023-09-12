const nav =document.querySelector('nav');
// const hamburgerIcon=  document.querySelector('#hamburger_img');
const hamburgerBtn=  document.querySelector('#hamburger_btn');

const ul_links=  document.querySelector('.nav-links');


hamburgerBtn.addEventListener('click',(e)=>{
    ul_links.classList.toggle('toggle_nav_link_display');
    hamburgerBtn.classList.toggle('hamburger_active');
    // console.log(hamburgerIcon)
    setTimeout(()=>{
ul_links.classList.contains('toggle_nav_link_display') ? document.querySelector('.toggle_nav_link_display').style.opacity=1 : ul_links.style.opacity=0;

    },10)
  
});