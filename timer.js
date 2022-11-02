// TODO
    // styling
    // sounds

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#inactive').style.display = 'flex';
    document.querySelector('#active').style.display = 'none';
    document.querySelector('#start').addEventListener("click", start_program);
})

function start_program() {
    document.querySelector('#inactive').style.display = 'none';
    document.querySelector('#active').style.display = 'block';
    document.querySelector('#range_container').style.display = 'block';
    document.querySelector('#mage_container').style.display = 'none';
    let initial_interval = 8000;    // Timer runs for 8 seconds only on the first iteration
    gauntlet_timer = new timer(change_view, initial_interval);
    document.querySelector('#reset').addEventListener("click", reset_program);
    document.querySelector('#trampled').addEventListener("click", trampled);
}


function timer(callback, time) {
    this.callback = callback;
    this.extraTime = 0;
    this.running = true;
    this.timeout(time);
}

timer.prototype.timeout = function(time) {
    let that = this,
    exececute = function () {
        that.execute()
    };
    if (that.running) {
        setTimeout(function(){
            exececute();
            that.timeout(12000);    // Timer changes to default interval of 12 seconds for the remaining runtime
        }, time)
    }
}

timer.prototype.execute = function () {
    let that = this,
    execute = function () {
        that.execute()
    };
    if (this.extraTime) {
        setTimeout(execute, this.extraTime);
        this.extraTime = 0;
    } else {
        this.callback();
    }
};

timer.prototype.addTime = function(time_to_add) {
    this.extraTime += time_to_add;
}

function trampled() {
    if (gauntlet_timer) {gauntlet_timer.addTime(3000);} // Trampled by the Hunllef adds 3 seconds to the timer before change
}


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
    if (gauntlet_timer.running) {
        gauntlet_timer.running = false;
        document.querySelector('#inactive').style.display = 'block';
        document.querySelector('#active').style.display = 'none';
    };
};