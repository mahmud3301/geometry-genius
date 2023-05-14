document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newQuantity = updateQuantityNumber(true, 'case-quantity-count');
    const caseTotalCost = newQuantity * 59;
    setInnerText('case-price', caseTotalCost);
    calculateTotalAmount();
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newQuantity = updateQuantityNumber(false, 'case-quantity-count');
    const caseTotalCost = newQuantity * 59;
    setInnerText('case-price', caseTotalCost);
    calculateTotalAmount();
})