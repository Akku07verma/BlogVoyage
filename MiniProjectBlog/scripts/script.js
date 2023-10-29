const logo = document.querySelector(".logo")
const btnLogin = document.querySelector("#login")
const btnSignUp = document.querySelector("#signup")

logo.addEventListener('click', ()=>{
    window.location.href = "/"
})

try{
    btnSignUp.addEventListener('click', () => {
        window.location.href = "/signup"
    })
}
catch(e){null}
try{
    btnLogin.addEventListener('click', () => {
        window.location.href = "/login"
    })
}
catch(e){null}
