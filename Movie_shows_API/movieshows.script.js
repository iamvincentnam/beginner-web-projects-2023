//Grabbing or getting access to the HTML Elements
const form = document.querySelector('.search-form');

//due to event bubling phenomenon, we are placing the event listener on the form rather than the input element. because eventually, the event would be bubbled upward to the parent element.


//const movieName = document.querySelector('.//movieName');
//const movieSummary= document.querySelector('.//movieSummary');
//const releasedYear= document.querySelector('.//releasedYear');
//const query = document.querySelector('#query');//const button = document.querySelector('.btn');




//scroll-to-Bottom function to enable the returned result to be seen
const scrollTOBottomFunction = ()=>{
    window.scrollTo({
top:document.body.scrollHeight,
behavior:'smooth',
    });
}

//form event listener that takes in the query
form.addEventListener('submit', function(e){
    //e.preventDefault is very important as it prevents the form from submiting it to where  you don't want it to.
e.preventDefault();
//save the query value in a variable called queryValue
const queryValue =query.value.trim();
//call the movieSearch Function
movieSearch(queryValue); 

/* Reset the form to clear the data after submiting */
form.reset()
});


const movieSearch = async(queryValue)=>{

    //store the response request in a variable res
 const res= await axios.get(`https://api.tvmaze.com/search/shows?q=${queryValue}`);

 //get access to the moviecard element 
 movieCard = document.querySelector('.movie_card');


 //clear the movieCard element if  there was a previous returned result as its child element
   movieCard.innerHTML = '';

//Call the  LoopShow_Func
 loopShows_Func(res.data);


 //call the scrollTOBottomFunction
scrollTOBottomFunction();
}

const loopShows_Func =(shows)=>{
    for(let result_show of shows){
     const data = result_show.show;
     /* due to the nature of the design of some API, not every returned result would have a specific property, thus making some property like the image to be null. Avoid error, set a condition for this */
      
       if(data.image){
         const image= data.image.medium;
         const showName =data.name;
         const runtime =data.runtime;
         const summary =data.summary;
         const result = html_rendering(image, showName, summary);
         const div_element = document.createElement('div');
         div_element.classList.add('col-lg-4','col-sm-6');
        div_element.innerHTML =result;
          movieCard.appendChild(div_element);
       } 
   }  
 
    }

function html_rendering (image,showName,summary){
   const htmlTemplate =`<div class="card  shadow-lg my-3 border-0 p-0">
              <img src="${image}" alt="movie show image" class="card-img-top m-0">
              <div class="card-body my-0 py-2">
                <h5 class="card-title text-danger movieName">${showName}</h5>
                <div class="card-text m-0">
                <p class="text-muted m-0 movieSummary">${summary}</p>
                <p class="releasedYear">Released year</p>
                </div>
                <a href="#" class="btn px-2 my-4 text-white bg-primary shadow mb-2" name="author"> Read More</a>
              </div>
            </div>`;
            return htmlTemplate;

}

