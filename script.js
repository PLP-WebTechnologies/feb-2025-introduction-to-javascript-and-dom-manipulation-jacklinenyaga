// DOM Elements
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');
const changeStyleBtn = document.getElementById('change-style-btn');
const styleDemo = document.getElementById('style-demo');
const toggleElementBtn = document.getElementById('toggle-element-btn');
const elementContainer = document.getElementById('element-container');

// Task 1: Change text content dynamically
changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = "Text successfully changed using JavaScript!";
});

// Task 2: Modify CSS styles via JavaScript
changeStyleBtn.addEventListener('click', () => {
    styleDemo.style.backgroundColor = '#ffcccc';
    styleDemo.style.border = '2px solid #ff0000';
    styleDemo.style.color = '#333';
    styleDemo.textContent = "Styles changed!";
});

// Task 3: Add or remove an element when a button is clicked
let newElementExists = false;
let newElement = null;

toggleElementBtn.addEventListener('click', () => {
    if (!newElementExists) {
        // Create new element
        newElement = document.createElement('div');
        newElement.className = 'new-element';
        newElement.textContent = 'New element added dynamically!';
        elementContainer.appendChild(newElement);
        toggleElementBtn.textContent = 'Remove Element';
    } else {
        // Remove the element
        elementContainer.removeChild(newElement);
        toggleElementBtn.textContent = 'Add Element';
    }
    newElementExists = !newElementExists;
});