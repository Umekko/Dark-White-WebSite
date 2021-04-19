const $card = document.getElementById('card')
const $card2 = document.getElementById('card2')
const $card3 = document.getElementById('card3')
const $body = document.getElementById('body')
const $switchBtn = document.getElementById('switchbtn')
const $readBtn = document.getElementById('read-btn')
const $readBtn2 = document.getElementById('read-btn2')
const $readBtn3 = document.getElementById('read-btn3')


$switchBtn.addEventListener('click', function() {
    $card.classList.toggle('background-color')
    $card2.classList.toggle('background-color')
    $card3.classList.toggle('background-color')
    $body.classList.toggle('text-color')
    $switchBtn.classList.toggle('text-color')
    $readBtn.classList.toggle('text-color')
    $readBtn2.classList.toggle('text-color')
    $readBtn3.classList.toggle('text-color')
    
    
})

$switchBtn.addEventListener('click', function() {
    if($switchBtn.innerHTML === "Ночная версия сайта") {
        $switchBtn.innerHTML = "Дневная версия сайта"
    }
    else  {
        $switchBtn.innerHTML = "Ночная версия сайта"
    }
})