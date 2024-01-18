//Question 1:-
// Write a code to find the non-repeating characters in the given string.
// Explanation:
// Input(String) : Marketplace
// Output(Array of Characters): [M, r, k, t, p, l, c]

//Answer code:-
let input = "Marketplace";
let char = new Set(input);
let output = [];
for(const items of char){
  if(input.indexOf(items)===input.lastIndexOf(items)){
    output.push(items)
  }
}
console.log(output)

//Question 2:-
// Input will contains the string and list of nth fibonacci

// Input(String): “Welcome to an exclusive marketplace for working professionals”
// Input(List of Integers): [1, 3, 6, 9, 3]
// Output(List of Characters):[W, e, m, v, e ]

//Answer code:-

function myFunction(value, numberlist) {
    const output = [];
  
    for (const items of numberlist) {
      const x = fibonacci(items - 1); 
      const char = value[x];
      output.push(char);
    }
    return output;
  }
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  const value = "Welcome to an exclusive marketplace for working professionals";
  const numberlist = [1, 3, 6, 9, 3];
  const result = myFunction(value, numberlist);
  console.log(result);