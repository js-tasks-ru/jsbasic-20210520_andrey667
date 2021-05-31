let calculator = {
  read: function(a, b) {
    this.firstValue = a;
    this.secondValue = b;
  },
  sum: function() {
    let sumFirstValue = this.firstValue;
    let sumSecondValue = this.secondValue;
    return sumFirstValue + sumSecondValue;
  },
  mul: function() {
    let mulFirstValue = this.firstValue;
    let mulSecondValue = this.secondValue;
    return mulFirstValue * mulSecondValue;
  }
};

calculator.read(3, 5);

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
