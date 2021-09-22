let time =0;
let extraTime=0;
const buttonStart = document.querySelector("button");
let lastNumber =0;

buttonStart.addEventListener("click", gameStarted);

function gameStarted(){
    document.body.innerHTML ="";
    init();

}

function init(){
    const arrayBeforMix = createArray();
    const arrayAfterMix = mixedArray(arrayBeforMix);
    console.log(arrayAfterMix);

    const wrapper = document.createElement("table");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);

    // let index =0;
    for (let i=0; i<5; i++){
        const row = document.createElement("tr");
        wrapper.appendChild(row);
        
                for(let j=0; j<5; j++ ){
            const cell = document.createElement("tr");
            cell.classList.add("cell");
            // cell.innerText = arrayAfterMix[index];
            // index++;
            cell.innerText = arrayAfterMix.shift();
            cell.style.fontSize = Math.floor((Math.random()*25)+20)+ "px";
            cell.style.color = randomColor();
            cell.addEventListener("click", clickHeandler);
            row.appendChild(cell);
        }
    }
    const tipText = document.createElement('div');
    tipText.classList.add("tipText")
    tipText.innerText = "Найдите число 1" ; 
    document.body.appendChild(tipText)

const timer =document.createElement("div");
timer.innerText = "00:00";
timer.classList.add("timer");
document.body.appendChild(timer);
setInterval(timerFunc, 1000);  

    const fineTimer = document.createElement("div");
    fineTimer.innerText ="00:00"
    fineTimer.classList.add("timer");
    fineTimer.classList.add("extraTime");
    document.body.appendChild(fineTimer); 

}

function timerFunc(){
    const timerBlock =document.querySelector(".timer");
    time++;
    let min = Math.trunc(time/60);
    let sec = time%60;
if(sec<10){
    sec = "0"+sec;
}
if(min<10){
    min = "0"+min;
}
    timerBlock.innerText = `${min}:${sec}`;
}

function createArray(){
    const array =[];
    for(let i=1; i<=25;i++){
        array.push(i)
    }
    return array;         
   }

   function mixedArray(arr){
    for(let i=arr.length-1; i>0; i--){
        let j = Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]= [arr[j],arr[i]];
    }return arr;
        }

function randomColor(){
    let r=0;
    let g=0;
    let b=0;
    r = Math.floor(Math.random()*(256));
    g = Math.floor(Math.random()*(256));
    b = Math.floor(Math.random()*(256));
    const color = "#" + r.toString(16) + g.toString(16) +b.toString(16);
return color;
}       

function clickHeandler(event){

const eventNumber = Number(event.target.innerText);
if(eventNumber == lastNumber + 1){
event.target.classList.add("done")
    // event.target.innerText = " " ;
    lastNumber ++;
    updateTipText();
}else {
    extraTime= extraTime+2;
    updateExtraTimer();
    
}
console.log( extraTime);
}


function updateExtraTimer(){
    let min = Math.trunc(extraTime/60);
    let sec = extraTime%60;
    if(sec<10){
        sec = "0"+sec;
    }
    if(min<10){
        min = "0"+min;
    }
    document.querySelector('.extraTime').innerText = `${min}:${sec}`;
}
function updateTipText(){
     let eventNamber = lastNumber+1;
    document.querySelector(".tipText").innerText ="Найдите число "+ eventNamber;
    // if (eventNamber == 26){
    //     alert("Игра закончена")
    // }
}
