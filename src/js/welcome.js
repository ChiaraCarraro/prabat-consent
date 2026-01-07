import '../css/style.css';

const button = document.getElementById('continue-button');

const handleContinueClick = (event) => {
  event.preventDefault();
  window.location.href = './instructions.html';
};

// Needs JSON.parse to convert the string back to an object, otherwise we get e.g. "\"test\""
const subjID = JSON.parse(localStorage.getItem('subjID')) || 'test-lostIDinWelcome';
console.log(`Subject ID set to: ${subjID}`);

button.addEventListener('click', handleContinueClick, { capture: false });
