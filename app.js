let h3 = document.querySelector("h3");
let started = false;
let level = 0;

let gameSeq = [];
let userSeq = [];
let colourArr = ["purple", "yellow", "blue", "red"];

document.addEventListener("keypress", function(){
    if (started == false) {
        console.log("started");
        started = true;
        levelup();
    }
})

let btns = document.querySelectorAll(".box");
for(btn of btns){
    btn.addEventListener("click",btnclick);
}

function check(currindex){
    // console.log(level);
    // console.log(gameSeq);
    // console.log(userSeq);
    let index = currindex;
    if (userSeq[index] == gameSeq[index]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h3.innerHTML = `Game Over your score was <strong>${level}</strong> <br> press any key to start again`;
        let body = document.querySelector("body");
        body.classList.add("red");
        setTimeout(function(){
            body.classList.remove("red");
        }, 250);
        restart();
    }
}

function btnclick(){
    let btn = this;
    userflashing(btn);
    let usercol = btn.getAttribute("id");
    userSeq.push(usercol);
    check(userSeq.length - 1);
}

function flashing(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userflashing(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelup(){
    userSeq = [];
    level++;
    h3.innerText = `Level: ${level}`;
    let randomNum = Math.floor(Math.random() * 4);
    let randomColour = colourArr[randomNum];
    let randomBtn = document.querySelector(`.${randomColour}`);
    gameSeq.push(randomColour);
    flashing(randomBtn);
}

function restart(){
    level = 0;
    started = false;
    userSeq = [];
    gameSeq = [];
}
