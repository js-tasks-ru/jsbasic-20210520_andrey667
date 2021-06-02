let arr = [5, 3, 8, 1];


function filterRange(arr, a, b) {
  const result = arr.filter((arr) => {
    return a <= arr && b >= arr;
  })
    return result;
}


let filtered = filterRange(arr, 1, 4); 

