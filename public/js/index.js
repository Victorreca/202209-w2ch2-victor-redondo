import strictEquals from "./function.js";

console.log(`If both values are identical: ${strictEquals(1, 1)}`);
console.log(`If both values are NaN: ${strictEquals(NaN, NaN)}`);
console.log(`If numberTwo is 0 and numberOne is -0 ${strictEquals(0, -0)}`);
console.log(`If numberTwo is -0 and numberOne is 0 ${strictEquals(-0, 0)}`);
