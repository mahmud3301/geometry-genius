const backpackBg = document.getElementsByClassName('bg');
for(const backpack of backpackBg ){
    backpack.style.backgroundColor = 'tomato';
}

// banner first btn in add onclick events
document.getElementById('banner-first-btn').addEventListener('click', function(){
    console.log('Button successfully clicked');
})
// button events
document.getElementById('btn-event1').addEventListener('click', function(){
    const col1 = document.getElementById('shoes-col1');
    col1.style.display = 'none';
})
document.getElementById('btn-event2').addEventListener('click', function(){
    const col2 = document.getElementById('shoes-col2');
    col2.style.display = 'none';
})
document.getElementById('btn-event3').addEventListener('click', function(){
    const col3 = document.getElementById('shoes-col3');
    col3.style.display = 'none';
})

// submit button enable
document.getElementById('input-email').addEventListener('keyup', function(event){
    const inputText = event.target.value;
    if(inputText.includes('@gmail.') === true){
        document.getElementById('btn-submit').removeAttribute('disabled');
    }
})
document.getElementById('btn-submit').addEventListener('click', function(){
    console.log('Submitted');
    document.getElementById('input-email').value = '';
    document.getElementById('btn-submit').setAttribute('disabled',true);
} )