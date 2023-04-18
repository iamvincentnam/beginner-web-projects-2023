const alert_message =alert("This is odinukwe invoice");
setTimeout(()=>{
   const invoiceContainer = document.querySelector('.invoiceContainer');
   invoiceContainer.classList.remove('blur_property');
   console.log(invoiceContainer)
},0)

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
    <span class="rate">&#8358 ${rate}</span>
    <span class="qty" >${qtyValue}</span>
    <span class="price">&#8358 ${subTotalPrice} </span>`
     if(productName && qtyValue){
            productList.appendChild(list_item); 
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
 console.log(totalItems);
 }

