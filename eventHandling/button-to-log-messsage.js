// creating a button element

const button = document.createElement('button');
button.textContent = 'Click me';

button.addEventListener('click', () => {
    console.log('Button clicked');
});


document.body.appendChild(button);