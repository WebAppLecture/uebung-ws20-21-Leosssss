import {MyMath} from './MyMath.js';
window.MyMath = MyMath;

var inputStr = "";

export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
		this.numpad = numpad;
		this.outputCalculation = outputCalculation;
		this.outputSolution = outputSolution;
    this.setupNumPad();
    }

    setupNumPad(){
      //console.log(this.numpad.length);
		  for(let i = 0; i < this.numpad.length; i++){
        let num = this.numpad[i];
        num.addEventListener("click",this.onButtonClick.bind(this,i));
      }
    }

    onButtonClick(symbol,event) {
      inputStr += event.target.innerText;
      this.print(inputStr);

      if(event.target.innerText === "AC"){
        inputStr = "";
        this.print(inputStr);
      }    
    }

    print(string) {
      this.outputCalculation.innerText = string;
      //console.log(string);
    }

    printSolution(string) {

    }

    clear() {

    }

}
