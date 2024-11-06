//Latihan 1 Konversi fungsi ke arrow function
function greet(name) {
  return `Hello ${name} !`;
}

function square(num) {
  return num * num;
}

const greet1 = (name) => `Hello ${name}!`;
const square1 = (num) => num * num;

console.log(greet1("Hafidz"));
console.log(square1(10));

//Latihan 2 arrow function untuk increment
increment = (num) => num + 1; //tanpa menggunakan const untuk deklarasi variable
console.log(increment(1));

//Latihan 3 Filter Angka Genap
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//output yang diharapkan [2,4,6,8,10]

const Genap = (numbers) => {
  return numbers.filter((num) => num % 2 === 0);
};

console.log(Genap(numbers));

//Latihan 4 Menghitung Total Harga
calculateTotal = (price, quantity) => {
  return price * quantity;
};

//Latihan 5 Ubbah ke uppercase
const words = ["hello", "world", "Javascript"];

const toUpperCaseArray = (words) => {
  return words.map((word) => word.toUpperCase());
};
console.log(toUpperCaseArray(words));

//bentuk lainnya dalam function biasa
// function toUpperCaseArray(words) {
//     return words.map(function(word) {
//       return word.toUpperCase();
//     });
//   }

const names = ["Alice", "Bob", "Charlie"];

foreach = (names) => {
  return names.forEach((name) => console.log(`Hello, ${name}!`));
};
console.log(foreach(names));

const numberss = [1, 2, 3, 4];
const doubled = numberss.map((num) => num * 2);
console.log(doubled);
