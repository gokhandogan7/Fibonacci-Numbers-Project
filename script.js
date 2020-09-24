const input = document.getElementById("input");
const button = document.getElementById("btn");
const resultt = document.getElementById("result");
button.addEventListener("click", trigger);

function trigger() {
  if (input.value < 0 || input.value =="") {
    resultt.innerHTML = "Check the number!!!";
  } else {
    fibonacci();
  }
}

function fibonacci(){

    if(input.value == 0){
        resultt.innerHTML = `The Fibonacci value of ${input.value} is 0. `}

    else if(input.value == 1 || input.value == 2){
        resultt.innerHTML = `The Fibonacci value of ${input.value} is 1. `}
    else{
        fibonacci_series(input.value)[input.value]
        resultt.innerHTML = `The Fibonacci value of ${input.value} is ${fibonacci_series(input.value)[input.value]}. `}
    }

var fibonacci_series = function (n)
{
  if (n==1)
  {
    return [0, 1];
  }
  else
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);

    return s;

  }
};
console.log(fibonacci_series(8));
