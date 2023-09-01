function getPin(){
    const pin = randomPin();
    const pinString = pin + '';

    if(pinString.length === 4 ){
        return pin;
    }else{
        getPin();
    }
}


function  randomPin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPin = document.getElementById('dispaly-pin');
    displayPin.value = pin;
});