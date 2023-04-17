  /*  the Pokemon code starts here*/

  const pokemon_container = document.querySelector('#pokemon_div');
  pokemon_container.style.backgroundColor ='#586c5c';
  for(let i=0; i<51; i++){
   const pokemonImg =document.createElement('img');
   pokemonImg.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

   pokemon_container.appendChild(pokemonImg);

  }

      /* the second code  for button app starts here*/
       // let lists = document.querySelectorAll('li');
       // let div_first = document.querySelector('#which_came_first');        
   let section = document.querySelector('#btn_div');
    for(let i=0; i<100; i++){ 
   let  newbtn = document.createElement('button');
    newbtn.innerText ='Click Here';
       section.appendChild(newbtn);

    };
    const newbtn_ = document.querySelectorAll('button');
    const count = document.querySelector('#numberCount');
    let initial =100;
    //Now wee need to add event listener to the buttons' parent.
   section.addEventListener('click',(e)=>{
       // in order to avoid long chain of methods we are storing  the e.target.name in a button variable, because we would make use of it.

           const button = e.target.tagName;
           /* we would sset a conditional so that our code would only run only the element clicked is actually a button. */
           if (button == 'BUTTON') {
           e.target.remove();
           initial -=10;
            count.innerText = initial;
            //the last 2 lines of code is to dynamically change the value of count.
       for(let i=0; i<9 && section.children.length >0; i++){  
           /*the section returns a node so, we use the array [0] with its children to pick out each children at every instance. Ofcourse you know it loops nine times. so nine children will be affected */
          section.children[0].remove()
       } 
       }else {
           console.log(false)
         }
   });
    
 
