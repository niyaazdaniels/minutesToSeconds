function minutesToSecond(){
let number = document.getElementById('number').value; 
let seconds = number * 60;
document.getElementById('display').innerHTML = seconds; 

let btn = document.getElementById('convert'); 
btn.addEventListener("click", minutesToSecond);
}
minutesToSecond();