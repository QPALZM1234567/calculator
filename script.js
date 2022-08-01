const btns = document.querySelector(".buttons");

for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    let p = document.createElement('p');
    p.style.color = 'white';
    if (i < 12 && i % 4 < 3) {
        let temp = Math.floor(i / 4) * 3 + i % 4 + 1;
        div.classList.add(`${temp}`);
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
        div.classList.add('0');
        p.textContent = 0;
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