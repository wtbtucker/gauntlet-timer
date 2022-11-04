// TODO
    // styling
    //trampled lengthens the current interval but shortens the subsequent interval

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.inactive').style.display = 'flex';
    document.querySelector('.active').style.display = 'none';
    document.querySelector('#start').addEventListener("click", start_program);
})

function start_program() {
    document.querySelector('.inactive').style.display = 'none';
    document.querySelector('.active').style.display = 'flex';
    document.querySelector('.range').style.display = 'flex';
    document.querySelector('.mage').style.display = 'none';
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
        that.timeout_id = setTimeout(function(){
            exececute();
            console.log(that.timeout_id);
        }, time);
    }
}

timer.prototype.execute = async function () {
    let that = this,
    execute = function () {
        that.execute()
    };
    if (this.extraTime) {
        clearTimeout(gauntlet_timer.timeout_id)
        await delay(this.extraTime);
        this.extraTime = 0;
        this.callback();
        that.timeout(12000);
    } else {
        this.callback();
        that.timeout(12000);
    }
};

timer.prototype.addTime = function(time_to_add) {
    this.extraTime += time_to_add;
}

function trampled() {
    if (gauntlet_timer) {gauntlet_timer.addTime(3000);} // Trampled by the Hunllef adds 3 seconds to the timer before change
}

function delay(n) {
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}
function change_view() {
    let range_view = document.querySelector('.range');
    let mage_view = document.querySelector('.mage');
    if (range_view.style.display === 'flex') {
        range_view.style.display = 'none';
        mage_view.style.display = 'flex';
    } else {
        range_view.style.display = 'flex';
        mage_view.style.display = 'none';
    }
}

function reset_program() {
    if (gauntlet_timer.running) {
        gauntlet_timer.running = false;
        clearTimeout(gauntlet_timer.timeout_id)
        document.querySelector('.inactive').style.display = 'flex';
        document.querySelector('.active').style.display = 'none';
    };
};