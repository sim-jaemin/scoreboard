var a, b, rest;
[b, a,rest=10000] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

console.log(rest);
[a, b, ...rest] = [10, 20, 30, 40, 50, 50];

console.log(rest);
// expected output: [30,40,50]