// const alert_message =alert("This is odinukwe invoice");
const invoiceContainer = document.querySelector('.invoiceContainer');
setTimeout(()=>{
   
   invoiceContainer.classList.remove('blur_property');
   // console.log(invoiceContainer)
},0)
const toggleBackground = document.querySelector('.toggle-dark');
toggleBackground.addEventListener('click',(e)=>{
   if(e.target){
     document.body.classList.toggle('toggleBackground');
      console.log(body);
   }
})
// toggle background code

const productList = document.querySelector('#lists');
let desc =productList.querySelector('.desc');
// let subTotalPrice =productList.querySelector('.price');
let qty =productList.querySelector('.qty');
const form = document.querySelector('#form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const productName = form.elements.product.value;
    const qtyValue = form.elements.qty.value; 
    let randomRate = Math.floor((Math.random()* 20)+2.55);
   const  subTotalPrice = randomRate * qtyValue;
   const  rate =randomRate;
    const list_item = document.createElement('li');
    list_item.classList.add('litems');
    list_item.innerHTML = `<span class="desc"> ${productName} </span>  
    <span class="rate">&#8358 ${rate.toFixed(2)}</span>
    <span class="qty" >${qtyValue}</span>
    <span class="price">&#8358 ${subTotalPrice.toFixed(2)} </span>`
     if(productName && qtyValue){
            productList.appendChild(list_item); 
            subTotalAmountFunc();
            calculateTotalQuantity(); 
            caculateTotalItem();
           
            }   
            form.reset();
 });
 function calculateTotalQuantity(){
    const quantityCount = document.querySelector('#qtycount_value');
    let totalQty = 0;
    const itemqty_count = document.querySelectorAll('.qty');
    itemqty_count.forEach((quantity)=>{
     const quntityValue =parseFloat(quantity.textContent);
     totalQty+= quntityValue;
    });
    quantityCount.textContent= totalQty; 

 }
 function caculateTotalItem(){
   let itemCount_value = document.querySelector('#itemcount_value');
   let totalItems=0;
   const items = document.querySelectorAll('.desc');
  for(let i=0; i< items.length; i++){
   totalItems = i+1;
  }
  itemCount_value.textContent= totalItems;

 }

 const htmlDate = document.querySelector('.date');
const dateObject = new Date();
const month = dateObject.toLocaleString('default', {month:'long'});
const dateNumber =  dateObject.getDate();
const year = dateObject.getFullYear();

let dayOfWeekIndex =dateObject.getDay();

htmlDate.textContent =` ${dateNumber} ${month}, ${year}`;


const enterpaymentInput = document.querySelector('#enterpayment');
let data ='';
const cash = document.querySelector('#cash');


enterpaymentInput.addEventListener('input',(e)=>{
   e.preventDefault();
  data = e.target.value.trim();
  data = parseFloat(data);
  console.log(typeof(data))
  cash.textContent = `₦${data}`;

 
});

// const enterpaymentForm = document.querySelector('#enterpaymentForm');
// enterpaymentForm.addEventListener('submit',(e)=>{
//    e.preventDefault();
//    cash.textContent = data;
//  enterpaymentForm.reset();
//  mybalancefunc(data)
// });
// function  cashTextContent (cash){
// }



const subTotalprice = document.querySelector('#subtotal_value');

function subTotalAmountFunc(){
   const Allprices = document.querySelectorAll('.price');
   let intialPrice =0;
   Allprices.forEach((price)=>{
   const priceText = price.textContent;
   
   const priceValue = parseFloat(priceText.replace('₦','').trim());
   intialPrice += priceValue;
   });
   subTotalprice.textContent =`${intialPrice.toFixed(2)}`;
console.log( subTotalprice.textContent)

}

function enterpaymentFunc(){
 cash.textContent = `₦ ${data}`;
 const intialPrice = parseFloat(subTotalprice.textContent);
 const enteredCash = parseFloat(data);
 const difference = enteredCash - intialPrice;
 mybalancefunc(difference);
 enterpaymentForm.reset();
}
const enterpaymentForm = document.querySelector('#enterpaymentForm');
enterpaymentForm.addEventListener('submit',(e)=>{
   e.preventDefault();
  enterpaymentFunc();
});



function mybalancefunc(difference){
   const myBalance = document.querySelector('#balance-item');
    myBalance.textContent =  `₦${difference.toFixed(2)}`;   
}
