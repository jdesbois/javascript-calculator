var entry = '';
var log = '';

var buttons = document.getElementsByTagName('button');
var history = document.getElementById('history');
var input = document.getElementById('input');

for (var i=0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        entry = this.value;
        input.innerHTML = entry;
        console.log(entry);
    }
}