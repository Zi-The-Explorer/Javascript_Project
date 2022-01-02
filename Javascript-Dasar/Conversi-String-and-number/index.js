const value1 = parseInt("1");
const value2 = 1;
const sum = value1 + value2;
console.info(sum);



console.info(parseInt("1.1"));
console.info(parseFloat("1.1"));
console.info(Number("1.1"));

const a = 1;
const b = 1;
const total = a.toString() + b.toString();

console.info(total);

console.info(parseInt("salah")); // NaN
console.info(parseInt("1salah")); // 1
console.info(parseFloat("1.1text")); // 1.1

// Number() tidak akan mentolelir kesalahan pada data
console.info(Number("1.1ups")); // NaN
console.info(Number("1x")); // NaN
console.info(Number("bukan number")); // NaN

const first = Number("Salah"); // NaN
const totalNumber = first + 100;
console.info(isNaN(first)); // true, Karna first variable adalah NaN
console.info(isNaN(100)); // False, karna 100 adalah number