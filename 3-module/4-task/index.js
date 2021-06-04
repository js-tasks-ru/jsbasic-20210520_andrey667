




function showSalary(arr, age) {
  let str = arr
  .filter(userAge => userAge.age <= age)
  .map(nameBalance => `${nameBalance.name}, ${nameBalance.balance}`)
  .join('\n');
  return str;
}

