// Your code goes here

var arr = new Array(100);

for ( i = 0; i < arr.length; i++ ) {
  arr[i] = i + 1;
}

_.each(arr, function(num){
  if (num % 3 === 0 && num % 5 !== 0) {
    arr[num - 1] = "Fizz";
  } else if (num % 5 === 0 && num % 3 !== 0) {
    arr[num - 1] = "Buzz";
  } else if (num % 5 === 0 && num % 3 === 0) {
    arr[num - 1] = "FizzBuzz";
  } else {
    arr[num -1] = num;
  }
});

console.log(arr);