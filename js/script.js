const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messsageTextArea = document.querySelector("#message");
const progress = document.querySelector("#progress");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close-button");
const modalMessage = document.querySelector(".modal-message");



form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (nameInput.value === "") {
        showModal("Por favor, preencha seu nome");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        showModal("Por favor, preencha seu e-mail");
        return;
    }

    if (!validatePassword(passwordInput.value, 8)) {
        showModal("A senha precisa ter 8 digitos");
        return;
    }

    if (jobSelect.value === "") {
        showModal("Por favor, selecione sua situação");
        return;
    }

    if (messsageTextArea.value === "") {
        showModal("Preencha ou escreva uma mensagem");
        return;
    }




    form.submit();

});


function isEmailValid(email) {

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

function validatePassword(password, minDigits) {

    if (password.length >= minDigits) {
        return true;
    }

    return false;
}


form.addEventListener("input", () => {

    const totalFields = form.elements.length -1;

    let completedFields = 0;

    //conta o num de campos preenchidos
    for (let i = 0; i < totalFields; i++) {

        if (form.elements[i].value) {
            completedFields++;
        }
    }

    //atualiza a barra
    progress.value = (completedFields / totalFields) * 100;

})

function showModal(message){

    modalMessage.textContent = message;
    modal.style.display = "block";
}

closeButton.addEventListener("click", (e) => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if(e.target === modal){
        modal.style.display = "none";
    }
})