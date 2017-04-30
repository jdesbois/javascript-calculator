var entry = '';
var log = '';
var ac = '';

var buttons = document.getElementsByTagName('button');
var input = document.getElementById('input');
var logText = document.getElementById('history');

for (var i=0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        entry = this.value;
        log += this.value;
        input.innerHTML = entry;
        logText.innerHTML = log;
    }
}