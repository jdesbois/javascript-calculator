var entry = '';
var log = '';
var current = '';


var input = document.getElementById('input');
var sumHistory = document.getElementById('history');
var buttons = document.getElementsByTagName('button');

//RESET FUNCTION
function allClear() {
    log ="";
    entry = 0;
    current = 0;
    sumHistory.innerHTML = log;
    input.innerHTML = entry;   
}
function evaluate() {
    log = eval(log);
    entry = eval(log);
    input.innerHTML = entry;
    sumHistory.innerHTML = log;
}


//TEST BUTTONS
for (var i=0; i<buttons.length; i++) {
  buttons[i].addEventListener('click', function(button){  

    if (this.value == "=") {
        return evaluate();
    }
    if (this.value == "AC") {
       return allClear();
    }
           
            log += this.value;
            entry = this.value;
            input.innerHTML = entry;
            sumHistory.innerHTML = log;
        })
}