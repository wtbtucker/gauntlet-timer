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
    let IntervId = setInterval(change_view, 12000)
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

// timer
// set interval
// at the end of the interval conditionally switch between range and mage view depending on what is currently being displayed
//