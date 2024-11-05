//Latihan 1 Konversi fungsi biasa ke arrow function
function add(a, b) {
  return a + b;
}

add = (a, b) => {
  return a + b;
};

//Latihan 2 Menggunakan arrow function dalam array methods
const numbers = [1, 2, 3, 4, 5];

// 1. Menggunakan map untuk kuadrat
const squares = numbers.map((num) => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// 2. Menggunakan filter untuk angka genap
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// 3. Menggunakan reduce untuk jumlah
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15
