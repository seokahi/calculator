let button = document.querySelectorAll('button');
let clickNumber = document.getElementById('result');
let calculate;
let storeResult='';
let totalResult='';
function ShowClickNumber(number) {
    clickNumber.innerText = clickNumber.innerText+number;
    storeResult = storeResult+number;
    console.log("result",storeResult);
    if(number == '+' || number == '-' || number == '*' || number == '/') {calculate = number;}
    if(number == '=') {
        let number= storeResult.split(/\+|\-|\*|\//);
        let firstNumber = number[0];
        let secondNumber = number[1].split('=')[0];
        console.log(firstNumber,secondNumber);

        switch(calculate) {
            case '+' : totalResult = Number(firstNumber) + Number(secondNumber);
                        clickNumber.innerText = clickNumber.innerText + totalResult;
                break;
            case '-' :  totalResult = Number(firstNumber) - Number(secondNumber);
                        clickNumber.innerText = clickNumber.innerText + totalResult;
                break;
            case '*' :  totalResult = Number(firstNumber) * Number(secondNumber);
                        clickNumber.innerText = clickNumber.innerText + totalResult;
                break;
            case '/' :  totalResult = Number(firstNumber) / Number(secondNumber);
                        clickNumber.innerText = clickNumber.innerText + totalResult;
                break;
        }
        storeResult= totalResult;
    }
    if(number == 'c') {
        clickNumber.innerText = '';
        storeResult = '';
        totalResult= '';
    }
}
button.forEach(function(i) {
    i.addEventListener('click' , (e)=>ShowClickNumber(e.target.textContent));
})