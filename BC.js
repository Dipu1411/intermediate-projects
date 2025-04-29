let display = document.getElementById('display')
let buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (buttonText === 'C') {
            display.value = '';
        }
        else if (buttonText === '=') {
            try {
                display.value = eval(display.value);
            }
            catch (error) {
                display.value = 'error'
            }
        }
        else if (buttonText == '+/-') {
            display.value = String(parseFloat(display.value * -1));
        }
        else {
            display.value += buttonText;
        }
    });
});