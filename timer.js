let gauntlet_timer;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#inactive').style.display = 'block';
    document.querySelector('#active').style.display = 'none';
    document.querySelector('#start').addEventListener("click", start_program);
})

function start_program() {
    document.querySelector('#inactive').style.display = 'none';
    document.querySelector('#active').style.display = 'block';
    document.querySelector('#range_container').style.display = 'block';
    document.querySelector('#mage_container').style.display = 'none';
    gauntlet_timer = new timer(change_view, 12000);
    // document.querySelector('#reset').addEventListener("click", gauntlet_timer.reset_program);
    document.querySelector('#trampled').addEventListener("click", trampled);
}

// need an attribute to stop timer


function timer(callback, time) {
    let that = this,
    execute = function () {
        that.execute()
    };
    this.callback = callback;
    this.extraTime = 0;
    setTimeout(execute, time);
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

timer.prototype.addTime = function() {
    this.extraTime += 3000;
}

function trampled() {
    if (gauntlet_timer) {gauntlet_timer.addTime(3000);}
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
    if (tim) {
        tim.running = false;
        document.querySelector('#inactive').style.display = 'block';
        document.querySelector('#active').style.display = 'none';
    };
};