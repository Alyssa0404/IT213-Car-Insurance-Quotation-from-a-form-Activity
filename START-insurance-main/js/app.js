// Variables
const form = document.getElementById('request-quote');




//Event Listeners

eventListeners();
function eventListeners(){
   document.addEventListener('DOMContentLoaded', function() {
        //Create the <option> for the years
       const html = new HTMLUI();
       HTMLUI.prototype.diplayYears();
    });
    
    
   form.addEventListener('submit', function(e){
   e.preventDefault();

      const make = document.getElementById('make').value;
      const year = document.getElementById('year').value;

     const level = document.querySelector('input[name="level"]:checked').value;
    
        if(make === '' || year === '' || level === '') {
            console.log('Error');
        } else {
            console.log('Alright!!');
        }
    });
}





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