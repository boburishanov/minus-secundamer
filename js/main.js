let hour = document.querySelector(".hour") 
let minutes = document.querySelector(".minutes")
let secoundes = document.querySelector(".secoundes")

let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let retryBtn = document.querySelector("#retryBtn");

let interval = ""

// btn pluse

let hourBtn=()=>{
   hour.innerHTML++
}
let minuteBtn = () =>{
    minutes.innerHTML++
}
let secoundesBtn = () =>{
    secoundes.innerHTML++
}

// btn minuse

let hourBtnminus = () =>{
    hour.innerHTML--
    
}

let minuteBtnminus = ()=>{
    minutes.innerHTML--
}

let secundeBtnminus = ()=>{
    secoundes.innerHTML--
}

startBtn.addEventListener('click', ()=>{
    interval = setInterval(()=>{
        if(+secoundes.innerHTML > 0){
            secoundes.innerHTML--
        }else if(minutes.innerHTML > 0){
            minutes.innerHTML--
            secoundes.innerHTML = 59
        }else if(hour.innerHTML > 0){
            hour.innerHTML--
            minutes.innerHTML = 59
            secoundes.innerHTML = 59
        }else if(hour.innerHTML === 0){
            minutes.innerHTML--
        }else if(minutes.innerHTML === 0){
            secoundes.innerHTML--
        }else{
            secoundes=0
        }
    },1000)
    startBtn.disabled = true
})

stopBtn.addEventListener('click', ()=>{
    if(interval !== ""){
        clearInterval(interval)
    }
    startBtn.disabled = false
})

retryBtn.addEventListener('click',()=>{
    if(interval !== ""){
        clearInterval(interval)
    }
    hour.innerHTML=0
    minutes.innerHTML=0
    secoundes.innerHTML=0
    startBtn.disabled = false
})