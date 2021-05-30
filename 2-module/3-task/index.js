let calculator = {
  read: function(a, b) {
    calculator.firstValue = a;
    calculator.secondValue = b;
  },
  sum: function() {
    let sumFirstValue = calculator.firstValue;
    let sumSecondValue = calculator.secondValue;
    return sumFirstValue + sumSecondValue;
  },
  mul: function() {
    let mulFirstValue = calculator.firstValue;
    let mulSecondValue = calculator.secondValue;
    return mulFirstValue * mulSecondValue;
  }
};

calculator.read(3, 5);
console.log(calculator);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
