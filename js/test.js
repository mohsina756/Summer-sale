// console.log('index');
function handleOnClick(currentCard){
    // console.log(currentCard);
    // console.log(currentCard.children[2].children[0]);
const item = currentCard.children[2].children[0].innerText;
// console.log(item);
const itemList = document.getElementById('item-list');
const li = document.createElement('li');
li.innerText = item;
// console.log(li);
itemList.appendChild(li);
// price add
const price = currentCard.children[2].children[1].children[0].innerText;
const totalPrice = document.getElementById('total-price');
const previousPriceValue = parseFloat(totalPrice.innerText);
// console.log(previousPriceValue);
const total = parseFloat(price) + previousPriceValue;
// console.log(total);
totalPrice .innerText = total.toFixed(2);
// button enable
if(total > 0){
    const makePurchaseBtn =  document.getElementById('make-purchase')
    makePurchaseBtn.removeAttribute('disabled')
}
if(total >= 200){
    const applyBtn = document.getElementById('apply')
    applyBtn.removeAttribute('disabled') 
}

}
function couponApply(){
    const couponFieldValue = document.getElementById('coupon-field').value;
    // console.log(couponFieldValue);
    const totalValue = parseFloat(document.getElementById('total-price').innerText);
    const discountField = document.getElementById('discount-price'); 
    const grandTotalField = document.getElementById('total');
    if(couponFieldValue == 'SELL200'){
   const discountValue = totalValue * 0.2;
   discountField.innerText = discountValue.toFixed(2);
   const grandTotalValue = totalValue - discountValue;
   grandTotalField.innerText = grandTotalValue;
 }
}