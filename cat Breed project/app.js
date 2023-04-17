const catform = document.querySelector('#shelterForm');
const catLists = document.querySelector('#catlists');
const imageContainer = document.querySelector('.img_div');
const img = imageContainer.querySelector('img');

const catBreeds =['bengal','British Short hair', 'maineCoon','persian','ragdoll','scottishFold','siamese','sphynx','exotic Short Hair','Japanese bobtail','Abyssinian', 'American Shorthair','American Wirehair','Chartreux','Devon Rex','Himalayan','Manx Cat','Manx Cat','Pixiebob','Savannah Cat Breed','Russian Blue'];

function addTolist(name_of_cat){
    let found = false;
    
    for(let breed of catBreeds){
        if(name_of_cat && breed.toLowerCase().includes(name_of_cat)){
 let catListItem = `<li class="catitems"><strong>${name_of_cat}</strong> </li>`;
            
        catLists.innerHTML +=catListItem; 
        catform.reset(); 
        const newImage = document.createElement('img');
        newImage.setAttribute('src', `./cat pics/${breed}.jpg`);
        newImage.setAttribute('alt',`${breed} image`);
        imageContainer.appendChild(newImage);  
        found = true
        break;
    } 

    }
   if(!found){
    catform.reset();
   alert('not found');
   }
}


catform.addEventListener('submit', (e)=>{
    e.preventDefault();
 let cat_name_input =catform.querySelector('#textInput').value.trim();
   cat_name_input = cat_name_input. toLowerCase();
    addTolist(cat_name_input);
});

const close = document.querySelector('#closeIcon');
const largethumbnail = document.querySelector('.largeThumbnail > img');
const sectionElement = document.querySelector('section');
function imageThumbnail(){
    sectionElement.addEventListener('click',(e)=>{
        if(e.target.tagName == 'IMG'){
            console.lo  
         largethumbnail.setAttribute('src', e.target.getAttribute('src'));
         largethumbnail.setAttribute('alt', e.target.getAttribute('alt'));
        document.body.classList.add('toggleDisplay');
      
        }
    
    
       }); 
     close.addEventListener('click',(e)=>{
    
        if(e.target){
            document.body.classList.remove('toggleDisplay');
            
        }
        });
   
 }
 
    imageThumbnail();