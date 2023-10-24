const capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const smallLetter = capLetter.toLowerCase()
var captcha = ""
const captchaDiv = document.querySelector(".captcha")

for(let i = 0; i < 6; i++){
    let tempIndex = Math.floor(26 * Math.random())
    if(i < 2){
        captcha += capLetter[tempIndex]
    }
    else if(i>=2 && i<4){
        captcha += smallLetter[tempIndex]
    }
    else{
        captcha += Math.floor(9 * Math.random())
    }
}

captchaDiv.textContent = captcha