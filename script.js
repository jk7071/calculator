let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText === 'AC') {
            display.value = '';
        } else if (e.target.innerText === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += e.target.innerText;
        }
    });
});
