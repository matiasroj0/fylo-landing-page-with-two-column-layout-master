const getStartedBtn = document.querySelector(".get-started-btn");
const getStartedForFreeBtn = document.querySelector(".get-started-for-free-btn");

const emailInputTop = document.querySelector(".email-input-top");
const emailInputBottom = document.querySelector(".email-input-bottom");

const emailErrorTop = document.querySelector(".email-error-top");
const emailErrorBottom = document.querySelector(".email-error-bottom");

const arrowIcon = document.querySelector(".arrow-icon");
const bottomSection = document.querySelector(".bottom-section-link");


bottomSection.addEventListener("mouseover", ()=> {
    arrowIcon.classList.add("arrow-icon-color");
})

bottomSection.addEventListener("mouseout", ()=> {
    arrowIcon.classList.remove("arrow-icon-color");
})

getStartedBtn.addEventListener("click",()=> {
    let x = window.matchMedia("(max-width: 900px)")

    if(!validateEmail(emailInputTop)){
        emailErrorTop.classList.remove("hidden");
        emailInputTop.classList.add("email-error-border");
        if(x.matches){
            getStartedBtn.style.marginTop = "1rem";
        }
    } else {
        emailErrorTop.classList.add("hidden");
        emailInputTop.classList.remove("email-error-border");
        if(x.matches){
            getStartedBtn.style.marginTop = "0";
        }
    }
})

getStartedForFreeBtn.addEventListener("click",()=> {
    if(!validateEmail(emailInputBottom)){
        emailErrorBottom.classList.remove("hidden");
        emailInputBottom.classList.add("email-error-border");
    } else {
        emailErrorBottom.classList.add("hidden");
        emailInputBottom.classList.remove("email-error-border");
    }
})


function validateEmail(input){
    emailInputValue = input.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInputValue)){
        return true;
    }
    else {
        return false;
    }
}
