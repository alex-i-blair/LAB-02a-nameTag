const updateButton = document.getElementById('update-button');
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const changeColorBlue = document.getElementById('change-color-blue');


updateButton.addEventListener ('click', () => {
    // console.log('you clicked the button');
    const newName = nameInput.value;
    nameDisplay.textContent = newName;
});

// updateButton.addEventListener ('click' () => {
//     const newColor = changeColorBlue.style.backgroundColor='blue';

// })