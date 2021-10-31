// Variables





//Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    //Create the <option> for the years
    const html = new HTMLUI();
    HTMLUI.prototype.diplayYears();
});






//Objects

function HTMLUI() {}

HTMLUI.prototype.diplayYears = function () {

    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYears = document.getElementById('year');
    for (let i= max; i >= min; i-- ) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option);
    }
}