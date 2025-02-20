const textError = document.querySelector('.textError');
const  btn = document.querySelector('.btn');
const inputName = document.querySelector('.inputName');
const inputSurname = document.querySelector('.inputSurname');
const inputAge = document.querySelector('.inputAge');
const inputTel = document.querySelector('.inputTel');
const textName = document.querySelector('.textName');
const textSurname = document.querySelector('.textSurname');
const textAge = document.querySelector('.textAge');
const textTel = document.querySelector('.textTel');

btn.addEventListener('click', () => {
    if (inputName.value === "" || inputSurname.value === "" || inputAge.value === "" || inputTel.value === "" ) {
        textError.style.display = "block";
    } else {
        textError.style.display = "none";
        textName.textContent += inputName.value;
        inputName.value = "";
        textSurname.textContent += inputSurname.value;
        inputSurname.value = "";
        textAge.textContent += inputAge.value;
        inputAge.value = "";
        textTel.textContent += inputTel.value;
        inputTel.value = "";
    }
})


