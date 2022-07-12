var numberText = document.getElementById("number");
var button = document.getElementById("sent");
var answers = document.getElementById("answers");
var tip = document.getElementById("tip");
var number;
var randomNumber = parseInt(Math.random()*10)+1;
console.log(randomNumber);
var i =0;
var listItem = document.getElementById("answersList");
button.addEventListener("click",check);

function check(){
number=    parseInt(numberText.value);
    i++;
    if(!Number.isInteger(number) || number <= 0  || number >10){
        alert("Twoja liczba nie spełnia warunków zadania");
    }else if(number < randomNumber){
        tip.innerHTML = "Podałeś za małą liczbę";
       
    }else if(number > randomNumber){
        tip.innerHTML = "Podałeś za wysoką liczbę";
    }else{
        tip.innerHTML = "Zgadłeś, BINGO!";
        
        button.removeEventListener("click",check);
        button.innerHTML = "Odśwież";
        button.addEventListener("click",refresh);
    }
    
    var li = document.createElement("li");
    listItem.appendChild(li);
    li.innerHTML = number;
}

function refresh(){
    location.reload();
    
}