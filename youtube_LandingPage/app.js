const header_menuIcon= document.querySelector('#menu');


const youtubeSidebar= document.querySelector('.side-bar');

const mainContent= document.querySelector('main');

    if(window.innerWidth <= 800){
        header_menuIcon.addEventListener('click', ()=>{
            document.body.classList.toggle('sidebar_active');
        /*the reason I am setting a setimout below is that, by means of tweaking, I tried to make the sidebar to slide in from the left side of the screen smoothly. but since display is set to block alongside the translateX, you wont see any translation in to its position. so, the seTimeOut displays the sidebar first although it is not seen before it slides in to the view. */
            setTimeout(()=>{
                document.body.classList.toggle('sidebar_active_2');
                
            },1)
            
    });

} 
else{
     document.body.classList.remove('sidebar_active');
     
}



















const foodData =[
    {imageSrc:'food-pics/IMG-20230705-WA0007.jpg',title:'SEAFOOD MIXED GRILLED',
   creator: 'Domino Pizza'},
   {imageSrc:'food-pics/IMG-20230705-WA0002.jpg',title:'salmon gnocchi',
   creator: 'Genesis Fastfood'} ,
   {imageSrc:'food-pics/IMG-20230705-WA0003.jpg',title:'Geilled Lamb rack',
   creator: 'Chicken Republic'
    }, 
   {imageSrc:'food-pics/IMG-20230705-WA0004.jpg',title:'GRILLED Pistachio Rub lamb chops',
   creator: 'Chicken Republic'}, 
   {imageSrc:'food-pics/IMG-20230705-WA0006.jpg',title:'Braised Beef Ribs',
   creator: 'Chicken Republic'}, 
   {imageSrc:'food-pics/IMG-20230705-WA0008.jpg',title:'GRILLED SICILIAN PRAWNS',
   creator: 'Chicken Republic'}, 
   {imageSrc:'food-pics/IMG-20230705-WA0017.jpg',title:'Indian Pancake',
   creator: 'Chicken Republic'},
   {imageSrc:'food-pics/IMG-20230705-WA0018.jpg',title:'Catfish Peppersoup',
   creator: 'Genesis Fastfood'},
   {imageSrc:'food-pics/IMG-20230705-WA0015.jpg',title:'Carebbean Spring Roll',creator: 'Domino Pizza'}
];

const soundData =[
    {imageSrc:'WhatsApp/camry-03-07.jpeg',title:'Toyota Camry Android Screen',
    creator: 'Ikokuonline'} ,
    {imageSrc:'WhatsApp/camry-07-12.jpeg',title:'Android Screen Camry',
    creator: 'E.U Manson'}, 
    {imageSrc:'WhatsApp/flat_subwofer.jpeg',title:'Subwoofer Android',
    creator: 'E.U Manson'}, 
    {imageSrc:'WhatsApp/tesla-style.jpeg',title:'Tesla Style',
    creator: 'Mr. Parts.NG'}, 
    {imageSrc:'WhatsApp/kenwood-CD_player.png',title:'KenWood Audio',
    creator: 'Ikokuonline'}, 
    {imageSrc:'WhatsApp/canbus_decoder.jpg',title:'Canbus Decoder',
    creator: 'Ikokuonline'}, 
    {imageSrc:'WhatsApp/honda-2012-speaker.jpg',title:'Honda Back-door Speaker',
    creator: 'E.U Manson'}
 ];

 const interiorDecorData =
 [ {imageSrc:'80 Amazing Interior Design Wallpapers/1.jpg',title:'Home  Alaska', creator: 'BedMate'}, 
  {imageSrc:'80 Amazing Interior Design Wallpapers/2.jpg',title:'Home IN Nebraska',
  creator: 'LifeMate'}, 
  {imageSrc:'80 Amazing Interior Design Wallpapers/3.jpg',title:'Russian Crib',
  creator: 'LifeMate'}, 
  {imageSrc:'80 Amazing Interior Design Wallpapers/4.jpg',title:'Norwegian Vintage',
  creator: 'BedMate'}, 
  {imageSrc:'80 Amazing Interior Design Wallpapers/5.jpg',title:'House Of the Dragon',
  creator: 'BedMate'}, 
  {imageSrc:'80 Amazing Interior Design Wallpapers/11.jpg',title:'Amazing Interior',
  creator: 'BedMate'} 

 ]
//Get container elements for food and sound sections
const foodContainer = document.querySelector('.container-1');
const soundContainer = document.querySelector('#container-2');
const interiorContainer = document.querySelector('#container-3');
// console.log(interiorContainer.previousElementSibling.querySelector('.show-section-arrow'))



 //function to generatethe HTML structure for a card.

 function generateCardHTML(imageSrc,title,creator){
    return ` <div class="card">
    <img src="${imageSrc}" alt="" class="thumbnail-image" width="250px" height="150px">
    <div class="card-details">
        <span><img src="icons/youtube-profile.jpg" alt="" height="40px" width="40px" class="chanel-icon"></span>
        <div class="video-details">
            <h3 class="title-h3">${title}</h3>
            <h5 class="title-h5">${creator}</h5>
            <div class="view-details"><span>100K views</span> <span>2 days ago</span></div>
        </div>
    </div>
</div>
`;
 }

 //section to create and Render cards in a section
 function renderCards(data,container){
const cardsHTML =data.map((item)=>{
 return generateCardHTML(item.imageSrc,item.title, item.creator)
}).join('');
container.innerHTML =cardsHTML;

 }

 renderCards(foodData,foodContainer);
renderCards(soundData,soundContainer);
renderCards(interiorDecorData,interiorContainer);
setupSectionToggle(soundContainer);
// setupSectionToggle(foodContainer);
setupSectionToggle(interiorContainer);
/* Function to set Up Section toggle behavior */
function setupSectionToggle(sectionContainer){
    const arrowButton = sectionContainer.previousElementSibling.querySelector('.show-section-arrow');
     arrowButton.addEventListener('click',()=>{
        sectionContainer.classList.toggle('display_toggle_for_video_section');
        arrowButton.classList.toggle('rotate_show_Section_Arrow');
        // console.log(arrowButton);

    });
}

//Call each of the functions to render cards and set up section toggle for food and sound section
