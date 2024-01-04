function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove(".form__message--success, .form__message--error");
    messageElement.classList.add(`.form__message--${type}`);
}

function setInputError(inputElement, message){
inputElement.classList.add("form__input--error");
inputElement.parentElement.querySelector(".form__input--error--message").textContent = message;
}


document.addEventListener("DOMContentLoaded", () =>{
    const Loginform = document.querySelector("#Login");
    const CreateAccountform = document.querySelector("#CreateAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        Loginform.classList.add("form--hidden");
        CreateAccountform.classList.remove("form--hidden");
    });


    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        Loginform.classList.remove("form--hidden");
        CreateAccountform.classList.add("form--hidden");
    });



    Loginform.addEventListener("submit", e =>{
        e.preventDefault();

        //perform your login

        setFormMessage(Loginform, "error", "Invalid Username or Password");


    });

    document.querySelectorAll(".form__input").forEach(inputElement =>{
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10)
            setInputError(inputElement, "Username must be at least 10 characters in length");


        });
    });


});
