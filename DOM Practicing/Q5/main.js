
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let tm = document.querySelector('#timer')
var count = 0;

start.addEventListener("click", ()=>{

    setInterval(function(){
        tm.textContent = count;
        count += 1 ; 
    }, 1000)    
})