// Make dynamic donate & history secton
function openTab(currentTab){
    let i;
    let item = document.getElementsByClassName('tab_section');

    for(i = 0; i < item.length; i++){
        item[i].style.display = 'none';
    }
    document.getElementById(currentTab).style.display = 'block';
}

// Global variable
let availableTaka = 0;
let singleAmount = 0;
let callModal = false;

let availableAmount = document.getElementById('available_amount');

// select donate & history buttons
const donateBtn = document.getElementById('donate_btn');
const historyBtn = document.getElementById('history_btn');

donateBtn.style.backgroundColor = '#B4F461';

// addEventListener to donate button
donateBtn.addEventListener('click', function() {
    historyBtn.style.backgroundColor = '';
    donateBtn.style.backgroundColor = '#B4F461';
});

// addEventListener to history button
historyBtn.addEventListener('click', function() {
    historyBtn.style.backgroundColor = '#B4F461';
    donateBtn.style.backgroundColor = '';
});

// window scroll event
window.addEventListener('scroll', function() {
    const x = window.scrollY;
    if(x > 0 ){
        document.getElementById('transparent').style.backgroundColor = `#ddd8d656`;
        document.getElementById('transparent').style.backdropFilter = `blur(8px)`;
        document.getElementById('nav_transparent').style.backgroundColor = `#ddd8d656`;
    
    }else{
        document.getElementById('transparent').style.backgroundColor = ``;
        document.getElementById('nav_transparent').style.backgroundColor = `#F9F7F3`;
    }
});


// donation card 1
document.getElementById('donation_btn1').addEventListener('click', function() {
    const inputValue1 = document.getElementById('donate_input');
    const donationCard1 = document.getElementById('donate_amount');

    validation(inputValue1, donationCard1);

    if(callModal && inputValue1.value !== ''){
        my_modal_1.showModal();
        inputValue1.value = '';
    }
});

// donation card 2
document.getElementById('donation_btn2').addEventListener('click', function() {

    const inputValue2 = document.getElementById('donate_input2');
    const donationCard2 = document.getElementById('donate_amount2')

    validation(inputValue2, donationCard2);

    if(callModal && inputValue2.value !== ''){
        my_modal_2.showModal();
        inputValue2.value = '';
    }
});

// donation card 3
document.getElementById('donation_btn3').addEventListener('click', function() {

    const inputValue3 = document.getElementById('donate_input3');
    const donationCard3 = document.getElementById('donate_amount3');
    const rex = inputValue3.value.match(/[^a-zA-Z ]+/);

    validation(inputValue3, donationCard3);

    if((callModal && inputValue3.value !== '') && (!inputValue3.value.includes('-') || inputValue3.value.match(/[^a-zA-Z ]+/))){
        my_modal_3.showModal();
        inputValue3.value = '';
    }
});


// Validation functionlity
function validation(inputValue, donationCard){

    const donateAmount = inputValue;

    let cardAmount =  donationCard;

    const rex = donateAmount.value.match(/[^a-zA-Z ]+/);

    if(!rex || donateAmount.value.includes('-')){
        return alert('Your provided data is not valid!');

    }else{

        if(!isNaN(parseFloat(donateAmount.value)) && donateAmount.value <= parseFloat(availableAmount.innerText)){
            
            let makeValid = parseFloat(donateAmount.value);
            availableTaka = parseFloat(availableAmount.innerText);

            const availableTotal = availableTaka - makeValid;
            availableAmount.innerText = availableTotal;
            singleAmount = parseFloat(cardAmount.innerText);
            cardAmount.innerText = singleAmount + makeValid;
            
            callModal = true
            transationHistory(makeValid);

        }else{
            return alert('Your provided data is invalid or insufficient!');
        }
    }
};


// transation functionlity
function transationHistory(makeValid){
    const sectionDiv = document.getElementById('history_section');
    const name = document.getElementById('title');

    sectionDiv.innerHTML += `
    <div class="p-6 border border-[#1111111a] rounded-xl">
    <p class='font-semibold text-lg mb-4'>${makeValid} ${name.innerText}</p>
    <p>Date: ${new Date()}</p>
    </div>
    `;
    //sectionDiv.appendChild(transationHistroy);
}

