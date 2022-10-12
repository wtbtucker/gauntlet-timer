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
    IntervId = setInterval(change_view, 12000)
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
    clearInterval(IntervId);
    IntervId = null;
    document.querySelector('#inactive').style.display = 'block';
    document.querySelector('#active').style.display = 'none';
}

// TODO: different interval at the beginning (1 second after first attack)
// Add functionality to trampled button
// Add functionality to reset button
// Add voice