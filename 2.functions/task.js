// Задание 1
function getArrayParams(arr) {
  let max = arr[0]; 
  let min = arr[0];
  let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (min >arr[i]) min = arr[i];
      if (max < arr[i]) max = arr[i];
      avg= sum / arr.length;
     avg = avg.toFixed(2); 
    }
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // Ваш код
 return sum;
}
function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
worker(arrOfArr);
if (max < worker(arrOfArr[i])) {
max = worker(arrOfArr[i]);
}
}
 // Ваш кода
  // for ...
  
return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
