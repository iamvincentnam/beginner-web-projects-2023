//grab or get access to relevant html elements which will needed to be worked with.
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');
const List = document.getElementById('list');


const minuteDisplay = document.querySelector('.minutes');
const secondDisplay= document.querySelector('.seconds');
const miliSecondDisplay = document.querySelector('.miliseconds');
//initialize some variables in Global scope 
let seconds =0;
let interval;
let isRunning =false;
let minutes =0;
//seconds as a variable holds a different value from sec.
let sec =0
let remainingSeconds=0;
let oldSeconds =sec;

//updateTimer function actually performs the calculation of changing from miliseconds to seconds & then to Minutes based on Modulus. then it is then called inside a set interval function.
function updateTimer(){
seconds+=51;
minutes = Math.floor(seconds/60000);
sec =Math.floor((seconds%60000)/1000);
remainingSeconds =Math.floor(seconds % 1000);

//call the function which will render the output in the DOM. the first parameter represent the element.querselector then the 2nd parameter represent the value.
text_content_display(minuteDisplay,minutes);
text_content_display(secondDisplay,sec);
text_content_display(miliSecondDisplay,remainingSeconds);      

//for every increment by 1 seconds, there should be an audion function called.
if(sec !== oldSeconds){
audiofunc();
oldSeconds =sec;  
}

}
//function to render the values in the Dom
function text_content_display(element, value){
return  element.textContent=value < 10 ? '0'+value : value.toString();
}

//during every 'stop' cick event, functiion to create list item of  laps and append them to the UL
      function laps(minutes,sec, remainingSeconds){
        const list_item = document.createElement('Li');
        list_item.innerHTML =`<div class="list_division"><span class="material-symbols-outlined">
        timer
        </span> <span>  ${text_content_display(minuteDisplay,minutes)} : ${text_content_display(secondDisplay,sec)} : ${text_content_display(miliSecondDisplay,remainingSeconds)} </span><span class="material-symbols-outlined delete">
        delete
        </span>
        </div>`
        //append each list item to the UL
        List.appendChild(list_item);
    }
    
    //event listener on the Ul
    List.addEventListener('click',(e)=>{
        
        if(e.target.classList.contains('delete')){

            list_item_of_laps= e.target.closest('Li');
            if(list_item_of_laps){
            //remove list item when a  delete icon is clicked 
                list_item_of_laps.remove();
            }
            //when the last laps list item is deleted, the timer should reset
            if(List.childElementCount ===0 && !isRunning){      
                reset_timer();
                
             }
        }
         });

        
 //An event listener for a start btn
start_btn.addEventListener('click',()=>{
if(!isRunning){
    interval  =setInterval(updateTimer,50);
    isRunning =true;
}

});
 //An event listener for a stop btn
stop_btn.addEventListener('click',()=>{
    if(isRunning){
        clearInterval(interval);
        isRunning=false;
       laps(minutes, sec,remainingSeconds);
       scrollTOBottomFunction()

        
    }
});

//scroll-to-Bottom function to enable the last result to be seen
const scrollTOBottomFunction = ()=>{
    window.scrollTo({
top:document.body.scrollHeight,
behavior:'smooth',
    });
}
//function to reset the timer since it would be called in other places
function reset_timer(){
    clearInterval(interval);
    seconds=0;
    isRunning =false;
    updateTimer();
    List.innerText=''
    text_content_display(miliSecondDisplay,'0'); 
}
reset_btn.addEventListener('click',reset_timer);

//audio function
function audiofunc(){
    const audioElement= document.createElement('audio');
  audioElement.id='audio-player';
  audioElement.src ='timer_sound.wav';
  audioElement.play();
  }
