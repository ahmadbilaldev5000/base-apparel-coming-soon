const formElement = document.querySelector('.form');
const emailInputElement = document.querySelector('#email');
const buttonElement = document.querySelector('button');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

buttonElement.addEventListener('click', () => {
    if(!emailRegex.test(emailInputElement.value)) {
        formElement.classList.add('invalid');
    } else {
        formElement.classList.remove('invalid');
    }
})
