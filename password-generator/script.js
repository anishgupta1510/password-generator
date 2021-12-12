const pw=document.getElementById('pw');
const copy=document.getElementById('clip-board');
const len=document.getElementById('len');
const upper =document.getElementById('upper');
const lower=document.getElementById('lower');
const number=document.getElementById('number');
const symbol=document.getElementById('symbol');
const gen=document.getElementById('gen')

const upperletters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerletters ='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const symbols='!@#$%^&*()_+=';
let audioturn=new Audio("ting.mp3");

function getlowercase(){
    return lowerletters[Math.floor(Math.random()*lowerletters.length)];
}

function getuppercase(){
    return upperletters[Math.floor(Math.random()*upperletters.length)];

}

function getnumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];

}

function getsymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];

}

gen.addEventListener('click',generate_pass)


function generate_pass(){
    const length=len.value;
let password="";

    for(let i=0;i<length;i++){
        const x=genratex();
        password+=x;
    }


    pw.innerText=password;
    audioturn.play();
}


function genratex(){
    const xs=[];
    if(upper.checked){
        xs.push(getuppercase());
    }
    if(lower.checked){
        xs.push(getlowercase());
    }
    if(number.checked){
        xs.push(getnumber());
    }
    if(symbol.checked){
        xs.push(getsymbol());
    }
    return xs[Math.floor(Math.random()*xs.length)];
    
}

function cc(){
    let t=document.getElementById('pw');
    const te=t.innerText;
    navigator.clipboard.writeText(te);
    let con=true;
    if(con){
        alert('copied to clip-board');
    }    
}

