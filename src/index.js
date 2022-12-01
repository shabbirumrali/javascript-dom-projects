import './test.css';
import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';
// create UI Tooltip
const tooltip = new Tooltip(document.querySelector('span.tooltip'));
tooltip.init();
console.log("Test");

// create Dropdown
const dropdown = document.querySelectorAll('.dropdown');

console.log(dropdown)
const dropdown1 = new Dropdown(dropdown);
dropdown1.init();