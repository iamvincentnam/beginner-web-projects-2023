
const p1 ={
score:0,
button: document.querySelector('#p1Button'),
display:document.querySelector('#p1Display')

};
const p2 ={
score:0,
button: document.querySelector('#p2Button'),
display:document.querySelector('#p2Display')

};
winningScore = 5;
let isGameOver =false;
const updateScore =function(player,opponent){
    if(!isGameOver){
       
       player.score +=1;
        if(player.score === winningScore){
     isGameOver =true;
     player.display.classList.add('has-text-success');
   opponent.display.classList.add('has-text-danger');
     player.button.disabled =true
     opponent.button.disabled =true
  }
  player.display.textContent =player.score;
    }
}
// let p1Score =0;
// let p2Score =0;

p1.button.addEventListener('click',()=>{ 
  updateScore(p1,p2) 
});
 p2.button.addEventListener('click',()=>{
  updateScore(p2,p1)
 });

function resetFunc(){
    isGameOver =false;
    p1.score =0;
    p2.score =0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1.button.disabled =false
     p2.button.disabled = false
p1.display.classList.remove('has-text-success','has-text-danger');
p2.display.classList.remove('has-text-success', 'has-text-danger');

}

const resetBtn = document.querySelector('#resetBtn');
 resetBtn.addEventListener('click',resetFunc);


 const winningScoreSelect = document.querySelector('select');
 winningScoreSelect.addEventListener('change',function(){
   winningScore =parseInt(this.value);
    resetFunc();
 });

