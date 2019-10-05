
const counter = document.getElementById ('counter');

const timerGauge= document.getElementById('timerGaugeconst');


//var 

let timer;
let count = 0;

//const 
const questionTime = 10; //10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;

timer = setInterval(renderCounter, 1000); //1000ms = 1s


renderCounter =() =>{
    if (count <= questionTime){
        counter.innerHTML = count;
        timerGauge.style.width = count * gaugeUnit + 'px';
        count++
    } 
    else{
        count = 0;
        (runningQuestion < lastQuestion); {
            renderQuestion();
        }
    }
};



