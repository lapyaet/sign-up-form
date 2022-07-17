
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const confirm = document.getElementById("confirmpassword");
const form = document.getElementById("signup");
const checkInput = document.getElementById("checkboxinput");
const btn = document.querySelector(".form__btn")

checkInput.onchange = function(){
    if(this.checked){
        btn.disabled = false;
        btn.classList.add("color")
   } else {
        btn.disabled = true;
        btn.classList.remove("color")
     }
    
   }

form.addEventListener("submit", function sumbit (event) {
    event.preventDefault();
    const firstInput = event.target[0];
    const lastInput = event.target[1];
    const emailInput = event.target[2];
    const passwordInput = event.target[3];
    const confirmInput = event.target[4];

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const confirmValue = confirmInput.value;

    const emailValidate = emailChecker(emailValue);
    const passValidate = passwordchecker(passwordValue);
    const confirmValidate = confirmChecker(passwordValue,confirmValue)

    let validateArray = [
        {
            isValidate : emailValidate,
            node : emailInput,
            value : emailValue,
            msg : "wrong email"
        },
        {
            isValidate : passValidate,
            node : passwordInput,
            value : emailValue,
            msg : "Invalid Password dfdskfldsmdjgoidjgkmdkghidrodfkdfkfdn"
        },
        {
            isValidate : confirmValidate,
            node : confirmInput,
            value : confirmValue,
            msg : "Invalid Password"
        }
    ]

    if(validateArray.every ((item) => item.isValidate === true)){
        // continue validation
    }else {
        for (let val of validateArray) {
            if(!val.isValidate) {
                let parentNode = val.node.parentNode;
                parentNode.removeChild(parentNode.lastChild);
                parentNode.innerHTML += errorTmp(val.msg);
            }
        }
    }
  })

function emailChecker (simple) {
    return new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(simple);
}

function errorTmp (msg) {
    return `<p class="check">${msg}</p>`
}

function passwordchecker (pass) {
    return new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})").test(pass);
}

function confirmChecker (passwords, confirmPass) {
    return passwords === confirmPass ;

}