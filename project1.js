let gameseq=[];
let userseq=[];
let score=[];
let btns= ["yellow","red","green","blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btn = document.querySelector("btn");
let body = document.querySelector("body");
let h3 = document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game strated");
    started= true;
    levelup();
    }
})
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx = Math.floor(Math.random()* 4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log("change");
    // console.log(`${randIdx}`);
    // console.log(`${randcolor}`);
    gameflash(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    highestscore(level);
}

function btnPress(){
    console.log("pressed");
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length-1);
}
function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup(),1500);
        }
    }else{
        h2.innerHTML=`Game Over!Your score is <b>${level}</b><br>Press Any Key To Restart`;
        body.style.backgroundColor="red";
        setTimeout( function(){
            body.style.backgroundColor="white"},300)
        reset();
    }
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress)
}
function reset(){
    started = false;
    gameseq = [];
    userseq=[];
    level = 0;
}
function highestscore(){
   score = [level];
   max = score[0];
   for(let i = 1; i<score.length;i++){
    if(max<score[i]){
        max = score[i];
        h3.innerText = `highest score is ${max}`
    }
   }
}