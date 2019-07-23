
let textArea = document.getElementById('paragraph');

textArea.innerHTML = 'Hello Word!';

// EVENTS

let okButton = document.getElementById('ok-button');
//Removing Elements
textArea.style.display = 'none';
okButton.addEventListener('click', function(){
    //Events
    textArea.innerText = 'Button Clicked!'

    //ADDING ELEMENTS
    textArea.style.display = 'block';
    
});



