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
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
const number = event.target.innerText;
const typedNumberField = document.getElementById('typed-numbers');
const previousTypedNumber = typedNumberField.value;
if(isNaN(number)){
    if(number === 'C'){
        typedNumberField.value = '';
    }else if(number === '<'){
        const digit = previousTypedNumber.split('');
        digit.pop();
        const remainingDigits = digit.join('');
        typedNumberField.value = remainingDigits;
    }
}
else{
    const newTypedNumber = previousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
}
});

const tryValue = document.getElementById('try-value');
    const tryValueText = tryValue.innerText;
    const tryValueString = parseInt(tryValueText);
    console.log(tryValueString);

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const currentNumberField = typedNumberField.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');

    

    if(currentPin === currentNumberField){
        pinSuccess.style.display = 'block';
        pinFailure.style.display = 'none';
        tryValue.innerText = tryValueString;
    }else {
        pinFailure.style.display = 'block';
        pinSuccess.style.display = 'none';
        const newValue = tryValueString - 1;
        tryValue.innerText = newValue;
       

    }
    

   
})
