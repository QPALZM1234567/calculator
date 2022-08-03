//states
let start = true;
let number = false;
let action = false;
let end = false;
let type = "";
let prior = "hello";


const btns = document.querySelector(".buttons");

//create buttons
for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    let p = document.createElement('p');
    p.style.color = 'white';
    if (i < 12 && i % 4 < 3) {
        let temp = Math.floor(i / 4) * 3 + i % 4 + 1;
        div.classList.add(`a${temp}`);
        p.textContent = temp;
    } else if (i === 3) {
        div.classList.add('clear');
        p.textContent = 'AC';
    } else if (i === 7) {
        div.classList.add('x');
        p.textContent = 'x';
    } else if (i === 11) {
        div.classList.add('divide');
        p.textContent = '÷';
    } else if (i === 12) {
        div.classList.add('plus');
        p.textContent = '+';
    } else if (i === 13) {
        div.classList.add('a0');
        p.textContent = '0';
    } else if (i === 14) {
        div.classList.add('minus');
        p.textContent = '-';
    } else {
        div.classList.add('equals');
        p.textContent = '=';
    }
    div.classList.add('button');
    div.appendChild(p);
    btns.appendChild(div);
}

const text = document.querySelector(".screen p");

//Add functions to the buttons
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    text.textContent = "0";
    start = true;
    number = false;
    action = false;
    end = false;
    type = "";
    prior = "hello";
});

for (let i = 0; i < 10; i++) {
    let temp = document.querySelector(`.a${i}`);
    console.log(temp);
    if (i === 0) {
        temp.addEventListener('click', () => {
            if (!start) {
                if (action) {
                    end = true;
                    text.textContent = i;
                    action = false;
                } else {
                    text.textContent = text.textContent + '0';
                    number = true;
                }
                
            }
        });
    } else {
        temp.addEventListener('click', () => {
            if (start) {
                text.textContent = i;
                start = false;
                number = true;
            } else {
                if (action) {
                    end = true;
                    text.textContent = i;
                    action = false;
                } else {
                    text.textContent = text.textContent + i;
                    number = true;
                }
                
            }

        })
        
    }
}

//Add functionality to the operator buttons
const add = document.querySelector('.plus');
add.addEventListener('click', () => {
    if (end) {
        //end action
    } else if (number) {
        action = true;
        type = "plus";
        prior = text.textContent;
    }
});

const subtract = document.querySelector('.minus');
subtract.addEventListener('click', () => {
    if (end) {
        //end action
    } else if (number) {
        action = true;
        type = "minus";
        prior = text.textContent;
    }
});

const multiply = document.querySelector('.x');
multiply.addEventListener('click', () => {
    if (end) {
        //end action
    } else if (number) {
        action = true;
        type = "x";
        prior = text.textContent;
    }
});

const divide = document.querySelector('.divide');
divide.addEventListener('click', () => {
    if (end) {
        //end action
    } else if (number) {
        action = true;
        type = "divide";
        prior = text.textContent;
    }
});