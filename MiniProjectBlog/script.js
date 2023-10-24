// const student={
//     name:"akku",
//     age:"20",
//     marks:94,
// }


const logo = document.querySelector(".logo")
const btnLogin = document.querySelector("#login")
const btnSignUp = document.querySelector("#signup")

logo.addEventListener('click', ()=>{
    window.location.href = "/"
})

try{
    btnSignUp.addEventListener('click', () => {
        window.location.href = "sign.html"
    })
}
catch(e){null}
try{
    btnLogin.addEventListener('click', () => {
        window.location.href = "login.html"
    })
}
catch(e){null}
