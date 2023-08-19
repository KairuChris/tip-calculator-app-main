let tipPercentage = document.querySelectorAll('.tip-buttons[data-percentage]');
let bill = document.getElementById('bill');
let numOfPeople = document.getElementById('numOfPeople');
let tipAmountVal = document.getElementById('tip-amount');
let tipCustomAmount = document.getElementById('custom');
let totalAmount = document.getElementById('totalAmount');
let resetButton = document.getElementById("reset");
let peopleNumberText = document.getElementById('people');
let zeroErrorText = document.getElementById('error-zero');


tipPercentage.forEach(button => {
    const buttonPercentage = parseFloat(button.getAttribute('data-percentage')) / 100;
    button.addEventListener('click', () => {
        calculateTips(buttonPercentage);

        tipCustomAmount.value = '';
    })
})

tipCustomAmount.addEventListener('input', function(){
    let customTip = parseFloat(tipCustomAmount.value)/100;
    
    if(!isNaN(customTip)){
        calculateTips(customTip);
    }else{
        tipAmountVal.textContent = "$0.00";
        totalAmount.textContent = "$0.00";
    }
    
})

function calculateTips(buttonPercentage){
    let billAmount = parseFloat(bill.value);
    let formattedBillAmount = parseFloat(billAmount.toFixed(2));
    let peopleNum = parseFloat(numOfPeople.value);
    let formattedPeopleNum = parseFloat(peopleNum.toFixed(2));

    if(!isNaN(formattedBillAmount) && !isNaN(formattedPeopleNum)){
        let totalTip = (formattedBillAmount * buttonPercentage) / formattedPeopleNum;
        let totalAmountVal = (formattedBillAmount / formattedPeopleNum) + totalTip;

        tipAmountVal.textContent = `$${totalTip.toFixed(2)}`;
        totalAmount.textContent = `$${totalAmountVal.toFixed(2)}`;
    }else{
        alert(`Bill amount or Number of people amount is invalid`);
    }
}


resetButton.addEventListener("click", function(){
    bill.value = '';
    numOfPeople.value = '';
    tipCustomAmount.value = '';

    tipAmountVal.innerText = '$0.00';
    totalAmount.innerText = '$0.00';

    numOfPeople.style.border = 'none';
    zeroErrorText.style.display = 'none';  
})

numOfPeople.addEventListener('input', () => {
    if(numOfPeople.value > '0'){
        numOfPeople.style.border = 'none';
        zeroErrorText.style.display = 'none';    
    }else{
        numOfPeople.style.border = '2px solid hsl(0, 73%, 67%)'
        zeroErrorText.style.display = 'block';
    
        tipAmountVal.innerText = '$0.00';
        totalAmount.innerText = '$0.00';
    }
})




