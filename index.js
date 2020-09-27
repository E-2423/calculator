class Calculator {
    constructor(prevOperand, currentOperand) {
        this.prevOperandElement = prevOperand;
        this.currentOperandElement = currentOperand;
    }
    clear() {

    }
    delete() {

    }
    appendNumber(number) {
        //this.currentOperandElement.innerText = number;
        this.currentOperandElement = this.currentOperandElement.toString() + number.toString();


        //this.prevOperandElement.innerText = number;
        //console.log(number)

    }
    chooseOperation() {

    }
    compute() {

    }
    getDisplayNumber() {

    }
    updateDisplay() {
        this.currentOperandElement.innerText =
            this.getDisplayNumber(this.currentOperandElement)

        if (this.operation != null)
            this.prevOperandElement.innerText

    }
}
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');


const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');



const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
numberButtons.forEach((button) => {
    button.addEventListener("click", function() {
        //console.log(button.innerText);
        calculator.appendNumber(button.innerText);
    })
})