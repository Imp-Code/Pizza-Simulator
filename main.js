if (localStorage.getItem('Int')) {
} else {
  localStorage.setItem('Int', 1000000000);
}

if (localStorage.getItem('Fusion')) {
} else {
  localStorage.setItem('Fusion', 1000000);
}

let VariableX = 1000001 - localStorage.getItem('Fusion')

document.getElementById('CountNumberID').innerHTML = 1000000000 - localStorage.getItem('Int');

function PizzaClick() {
  localStorage.setItem("Int", localStorage.getItem('Int') - VariableX);
  document.getElementById('CountNumberID').innerHTML = 1000000000 - localStorage.getItem('Int');
}

function Reset() {
  localStorage.setItem('Int', 1000000000);
  document.getElementById('CountNumberID').innerHTML = 1000000000 - localStorage.getItem('Int');
}
