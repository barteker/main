let num = [0,0,0,0,0,0,0,0,0,0]

const output = document.querySelector('.output');

const button0 = document.querySelector('#button0');
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const resetButton = document.querySelector('#resetButton').addEventListener('click', reset);
const submitButton = document.querySelector('#submitButton').addEventListener('click', submit);

const buttons = [button0,button1,button2,button3,button4,button5,button6,button7,button8,button9];

output.textContent = `(${num[0]}${num[1]}${num[2]})-${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}${num[9]}`;

let i = 0

for (let button of buttons){
    button.addEventListener("click", () => press(button.getAttribute("value")));
}

function randomNum(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function press(int){
    num[i] = int;
    output.textContent = `(${num[0]}${num[1]}${num[2]})-${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}${num[9]}`;
    randomize();
    i++;
}

function reset(){
    num = [0,0,0,0,0,0,0,0,0,0];
    output.textContent = `(${num[0]}${num[1]}${num[2]})-${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}${num[9]}`;
    i = 0;
}

function submit(){
    window.open(`mailto:baba5376@colorado.edu?subject=gimme ur number&body=Hello Bart,/n/nMy phone number is ${output.textContent}. I want you to have it SO SO BAD that I spent forever clicking those godforsaken escapist numbers./n/nYou’re the best web student ever and I don’t see any reason why you wouldn’t get an A on this project./n/nYours,/n[Insert Name Here]`);
}

function randomize(){
    for(let button of buttons){
        button.style.top = `${randomNum(100, 2000)}px`;
        button.style.left = `${randomNum(0, 3000)}px`;
    }
}

window.setInterval(randomize, 1000);

randomize();