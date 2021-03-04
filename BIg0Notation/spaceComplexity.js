
//TIME COMPLEXITY

//O(1) constant

function sum(arr) {
  let total = 0; // one number
  for (let i = 0; i < arr.length; i++) { //another number
    total += arr[i]
  }
  return total;
}

//O(n) linear

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]) //O(n) 
  }

  return newArr;
}

double([1, 2, 3])