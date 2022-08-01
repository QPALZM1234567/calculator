const btns = document.querySelector(".buttons");

for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    if (i < 12 && i % 4 < 3) {
        let temp = Math.floor(i / 4) * 3 + i % 4 + 1;
        div.classList.add(`${temp}`);
    } else if (i === 3) {
        div.classList.add('clear');
    } else if (i === 7) {
        div.classList.add('x');
    } else if (i === 11) {
        div.classList.add('divide');
    } else if (i === 12) {
        div.classList.add('plus');
    } else if (i === 13) {
        div.classList.add('0');
    } else if (i === 14) {
        div.classList.add('minus');
    } else {
        div.classList.add('equals');
    }
    div.classList.add('button');
    btns.appendChild(div);
}