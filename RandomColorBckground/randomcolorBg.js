  /* Now, Using Javascript make the background color of a body element, to be randomly and dynamicaly set */

        // firstly, pick hold of the elements you'll be interacting with using document.querySelector
        const body = document.querySelector('body');
        const btn = document.querySelector('button');
        const h1 = body.querySelector('h1');
      
        /* now, you would need a function as a container to hold the necessary codes so that when the function is called upon, basically, all the code in it will run*/
        function rgbColorFunc(){
          // create a random number generation and store in a variable red
          let red =Math.floor( (Math.random() * 255) +50);
          // create another one and store in the cariable green
        let green =Math.floor( (Math.random() * 255) +50);
        /* create the third one and store it in a variable green.  thus, each of these variables will continue to produce random numbers when they are being logged in the console. although, there is a tweak to it  when configuring the random number gneration which sets the maximum & minimum output of a value in a variable. however, i really do not know how to do that. */
        let blue =Math.floor( (Math.random() * 255) + 50);
        // return in a string that a background color value would appear as
       
  
        return  `rgb(${red},${green},${blue})`;
         
         
  
        }
        
    //put the function in an eventlistener. since we want it to continue running at an interval, put it inside a set initerval;
  btn.addEventListener('click', ()=>{
          setInterval(()=>{
         const newRandomColor= rgbColorFunc();
         h1.textContent =newRandomColor;
         body.style.backgroundColor = newRandomColor;
         console.log(newRandomColor);
       },1000)
      });