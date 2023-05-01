const p1Button = document.querySelector('#p1Button');
   const p2Button = document.querySelector('#p2Button');
   const p1Display = document.querySelector('#p1Display');
   const p2Display = document.querySelector('#p2Display');
   const resetBtn = document.querySelector('#resetBtn');


let p1Score =0;
let p2Score =0;
winningScore = 5;
let isGameOver =false;
p1Button.addEventListener('click',()=>{
    if(!isGameOver){
       
        p1Score+=1;
        if(p1Score === winningScore){
     isGameOver =true;
     p1Display.classList.add('has-text-success');
     p2Display.classList.add('has-text-danger');
     p1Button.disabled =true
     p2Button.disabled =true
  }
  p1Display.textContent = p1Score;
    }
   
});
 p2Button.addEventListener('click',()=>{
    if(!isGameOver){
        p2Score+=1;
     if(p2Score === winningScore){
        isGameOver =true;
        p2Display.classList.add('has-text-success');
     p1Display.classList.add('has-text-danger');
     p1Button.disabled =true
     p2Button.disabled =true
      
    }
    p2Display.textContent = p2Score;
    } 

 });
function resetFunc(){
    isGameOver =false;
    p1Score =0;
    p2Score =0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Button.disabled =false
     p2Button.disabled = false
    p1Display.classList.remove('has-text-success','has-text-danger');
 p2Display.classList.remove('has-text-success', 'has-text-danger');

}
 resetBtn.addEventListener('click',resetFunc);


 const winningScoreSelect = document.querySelector('select');
 winningScoreSelect.addEventListener('change',function(){
   winningScore =parseInt(this.value);
    resetFunc();
 });
 const section = document.querySelector("section");
