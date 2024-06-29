const smallCase = "abcdefghijklmnopqrstuvwxyz";
const bigCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers = "0123456789";
const Symbols = "!-$^+";
const space = " ";


const copy = document.getElementById("copy");
const input = document.getElementById("password");

let password = "";
let result ="";

const btn = document.getElementById("generate");

btn.addEventListener("click", ()=>{
    if (document.getElementById("lowercase").checked) {
        password += smallCase;
    }

    if (document.getElementById("uppercase").checked) {
        password += bigCase;
    }

    if (document.getElementById("numbers").checked) {
        password += Numbers;
    }
    if (document.getElementById("symbols").checked) {
        password += Symbols;
    }
    if (document.getElementById("spaces").checked) {
        password += space;
    }

    for (let index = 0; index < 12; index++) {
        let randomNumber = Math.floor(Math.random() * password.length);
        if (document.getElementById("exc-duplicate").checked && result.includes(password.charAt(randomNumber))) {
            continue;
        }
        else{
            result += password.charAt(randomNumber);
        }
    }

    input.value = result;
    result = "";
    password = "";
})

copy.addEventListener("click" , ()=>{
    input.disabled = false;
    let copyValue = input.value;
    navigator.clipboard.writeText(copyValue);
    input.disabled = true;
    copy.innerText = "Copied!";

    setTimeout(()=>{
        copy.innerText = "Copy";
    } , 3000);
})
