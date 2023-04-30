'use strict';

const calc = (e) => {
    // console.log(this.innerText);

    const buttonValue = e.target.innerText;

    const resPlace = document.querySelector('#res');

    if(buttonValue === 'C') {
        resPlace.value = '';
    } else if (buttonValue === '=') {
        resPlace.value = eval(resPlace.value);
    } else {
        resPlace.value += buttonValue;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((elem) => {

    // console.log(elem);
    elem.addEventListener('click', calc);

});