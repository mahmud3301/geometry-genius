document.getElementById('btn-iphone11-plus').addEventListener('click', function(){
    const newQuantity = updateQuantityNumber(true, 'iphone-quantity-count');
    const caseTotalCost = newQuantity * 1219;
    setInnerText('iphone11-price', caseTotalCost);
    calculateTotalAmount()
})
document.getElementById('btn-iphone11-minus').addEventListener('click', function(){
    const newQuantity = updateQuantityNumber(false, 'iphone-quantity-count');
    const caseTotalCost = newQuantity * 1219;
    setInnerText('iphone11-price', caseTotalCost);
    calculateTotalAmount();
})