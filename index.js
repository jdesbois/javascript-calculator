var entry = '';
var log = '';
var current = '';


var input = document.getElementById('input');
var sumHistory = document.getElementById('history');
var buttons = document.getElementsByTagName('button');

//RESET FUNCTION
function allClear() {
    log = "";
    entry = "";
    current = 0;
    sumHistory.innerHTML = log;
    input.innerHTML = entry;   
}
//EVALUATES LOG STRING
function evaluate() {
    log = eval(log);
    entry = eval(log);
    input.innerHTML = entry;
    sumHistory.innerHTML = log;
}

//BUTTONS LOOP
for (var i=0; i<buttons.length; i++) {
//ADDING CLICK LISTENER
  buttons[i].addEventListener('click', function(button){ 
    //IF EQUALS RUN EVALUATE FUNCTION
    if (this.value == "=") {
        return evaluate();
    }
    //IF AC RUN allClear FUNCTION
    if (this.value == "AC") {
       return allClear();
    }
    //IF not number stops adding to entry else adds to entry
    if (Number.isInteger(Number(this.value)) || this.value == ".") {
        entry += this.value;
        log += this.value;
        input.innerHTML = entry;
        sumHistory.innerHTML = log;
    } else {
        entry = "";
        log += this.value;
        // input.innerHTML = entry; NO LONGER NEEDED.
        sumHistory.innerHTML = log;
    }
    })
}


