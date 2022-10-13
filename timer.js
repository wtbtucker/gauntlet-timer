let IntervId;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#inactive').style.display = 'block';
    document.querySelector('#active').style.display = 'none';
    document.querySelector('#start').addEventListener("click", start_program);
    document.querySelector('#reset').addEventListener("click", reset_program);
})

function start_program() {
    document.querySelector('#inactive').style.display = 'none';
    document.querySelector('#active').style.display = 'block';
    document.querySelector('#range_container').style.display = 'block';
    document.querySelector('#mage_container').style.display = 'none';
    let timer = new Timer(change_view, 8000); // 1 second after first range attack, change on last range attack
}

// switch to a looped timer
// add a conditional to Timer for finished state
// Timer(change_view, 12000)
// if trampled button, timer.add 3000

function change_view() {
    let range_view = document.querySelector('#range_container');
    let mage_view = document.querySelector('#mage_container');
    if (range_view.style.display === 'block') {
        range_view.style.display = 'none';
        mage_view.style.display = 'block';
    } else {
        range_view.style.display = 'block';
        mage_view.style.display = 'none';
    }
}

function reset_program() {
    clearInterval(IntervId);
    IntervId = null;
    document.querySelector('#inactive').style.display = 'block';
    document.querySelector('#active').style.display = 'none';
}

function Timer(callback, time) {
    this.setTimeout(callback, time);
}

Timer.prototype.setTimeout = function(callback, time) {
    var self = this;
    if(this.timer) {
        clearTimeout(this.timer);
    }
    this.finished = false;
    this.callback = callback;
    this.time = time;
    this.timer = setTimeout(function() {
        self.finished = true;
        callback();
    }, time);
    this.start = Date.now();
}

Timer.prototype.add = function(time) {
    if(!this.finished) {
        time = this.time - (Date.now() - this.start) + time;
        this.setTimeout(this.callback, time);
    }
}