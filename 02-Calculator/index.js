import { Calculator } from './Calculator.js';

const button = document.querySelectorAll("#btn"),
calculationScreen = document.querySelector("#calculation"),
solutionScreen = document.querySelector("#solution");

window.Calculator = Calculator;
window.calc = new Calculator(button, calculationScreen, solutionScreen);
/*
const btn00, btn01, btn02, btn03, btn04, btn05,
btn06, btn07, btn08, btn09;

btn00 = document.querySelector("btn00");
btn01 = document.querySelector("btn01");
btn02 = document.querySelector("btn02");
btn03 = document.querySelector("btn03");
btn04 = document.querySelector("btn04");
btn05 = document.querySelector("btn05");
btn06 = document.querySelector("btn06");
btn07 = document.querySelector("btn07");
btn08 = document.querySelector("btn08");
btn09 = document.querySelector("btn09");*/


