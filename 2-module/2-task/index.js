function isEmpty(obj) {
  for (const k in obj) {
    return false;
  }
  return true;
} 

 


let schedule = {};

alert( isEmpty(schedule) ); 

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); 





