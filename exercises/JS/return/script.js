document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('.numberInput');
    const para = document.querySelector('p');
    input.addEventListener("change", () => {
        const num = parseFloat(input.value);
        if (isNaN(num)) {
            para.textContent = "You need to enter a number!";
        } else {
            para.textContent = `${num} squared is ${squared(num)}. `;
            para.textContent += `${num} cubed is ${cubed(num)}. `;
            para.textContent += `${num} factorial is ${factorial(num)}. `;
            para.textContent += `${num} square root is ${square_root(num)} `;
        }
    })
})





function squared(num) {
    return num * num;
}

function cubed (num) {
    return num * num * num;
}

function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x
        x--;
    }
    return num;
}

function square_root(number) {
    if (number < 0) {
        return undefined
    } else if (number === 0) {
        return 0 
    } else {
        return Math.sqrt(number)
    }
}