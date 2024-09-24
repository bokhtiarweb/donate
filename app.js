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


document.getElementById('handel_donate').addEventListener('click', function() {
    
    const donateAmount = document.getElementById('donate_input');
    const availableAmount = document.getElementById('available_amount');
    let cardAmount =  document.getElementById('donate_amount');

    const rex = donateAmount.value.match(/[^a-zA-Z ]+/);

    if(!rex || donateAmount.value.includes('-')){
        alert('Your provided data is not valid!');
        return

    }else{

        if(!isNaN(parseFloat(donateAmount.value)) && donateAmount.value <= parseFloat(availableAmount.innerText)){
            
            let makeValid = parseFloat(donateAmount.value);
            availableTaka = parseFloat(availableAmount.innerText);

            const availableTotal = availableTaka - makeValid;
            availableAmount.innerText = availableTotal;
            singleAmount = parseFloat(cardAmount.innerText);
            cardAmount.innerText = singleAmount + makeValid;
            
            donateAmount.value = '';
        }else{
            return alert('Your provided data is invalid or insufficient!');
        }
    }
})