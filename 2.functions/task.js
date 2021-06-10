// Задание 1
function getArrayParams(arr) {
  var max = arr[0]; 
  var min = arr[0];
  var sum = 0; // sum - сумма всех элементов массива
  

    for (var i = 0; i < arr.length; i++) {
		if (Object.prototype.toString.call(arr[i])) {
			sum += arr[i];
		}
    avg = sum / arr.length;
    if (arr[i] < min) min = arr[i];
    if (max < arr[i]) max = arr[i];
  }
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr){
  var sum = 0;
  for (var i = 0; i < arrOfArr.length; i++) {
    var sum = 0;
    for (var k = 0; k < arrOfArr[i].length; k++) {
    sum += arrOfArr[i][k];
    };
    console.log('сумма подмассива ' + i + ' равна ' + sum);
    sum += sum;
    };
    console.log('общая сумма равна ' + sum);
  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -100000000000;
  for (let i = 0; i < arrOfArr.length; i++){
    func(...arrOfArr[i])
    console.log(sum);
     if (sum > max){
       max = sum;
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
