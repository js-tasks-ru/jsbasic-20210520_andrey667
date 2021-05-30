let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}




function sumSalary(Obj) {
  let total = 0;
  for (const k in Obj) {
      if(typeof Obj[k] === "number" && isFinite (Obj[k]) ) {
        total += Obj[k];
      }
  }
  return total;
}

sumSalary(salaries)

