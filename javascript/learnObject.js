//Latihan 1 Membuat Object
const mobil = {
  merk: "Toyota",
  tahun: "2020",
  warna: "hitam",
};
console.log(mobil.merk);
console.log(mobil.tahun);
console.log(mobil.warna);

//Latihan 2 Masukan data ke dalam object
mobil.harga = 5000000;
mobil.warna = "putih";
console.log(mobil);

//Latihan 3 Buat Method Object
mobil.deskripsi = function () {
  return `Mobil ini adalah ${this.merk} tahun ${this.tahun} dan berwarna ${this.warna}`;
};
console.log(mobil.deskripsi());

//Latihan 4 Constructor Function
function Laptop(merk, tipe, harga) {
  this.merk = merk;
  this.tipe = tipe;
  this.harga = harga;
}

// Membuat object laptop1 dan laptop2 dengan nilai berbeda
const laptop1 = new Laptop("Acer", "Aspire 5", 8000000);
const laptop2 = new Laptop("Apple", "MacBook Pro", 25000000);

console.log();
// Menampilkan laptop1 dan laptop2 di console
console.log(laptop1);
// Output: Laptop { merk: 'Acer', tipe: 'Aspire 5', harga: 8000000 }
console.log(laptop2);
// Output: Laptop { merk: 'Apple', tipe: 'MacBook Pro', harga: 25000000 }

// Menambahkan method 'deskripsi' menggunakan Object.defineProperty()
// Object.defineProperty(mobil, 'deskripsi', {
//   value: function() {
//     return `Mobil ini adalah ${this.merk} tahun ${this.tahun} berwarna ${this.warna}.`;
//   },
//   writable: true, // Apakah method ini dapat diubah
//   enumerable: false, // Apakah method ini bisa dienumerasi
//   configurable: true // Apakah method ini bisa dihapus atau diubah
// });

function macbook(GPU, CPU, Price) {
  this.GPU = GPU;
  this.CPU = CPU;
  this.Price = Price;
}

const macbook1 = new macbook("RTX 4080", "Ryzen 5", 100000000);
const macbook2 = new macbook("RTX 4090", "Intel Corei3 13400k", 9999999);

console.log();
console.log(macbook1);
console.log(macbook2);

//Latihan 5 Spread Operator
const objA = {
  x: 10,
  y: 30,
};

const objB = {
  y: 20,
  z: 40,
};

const gabungan = { ...objA, ...objB };
console.log();
console.log(gabungan);

//Latihan 6 Menghapus properti
delete mobil.tahun;
console.log();
console.log(mobil);

//Latihan 7 Object di dalam Object
const rumah = {
  alamat: {
    jalan: "Jl. Sudirman",
    kota: "Jakarta",
    kodePos: 45045,
    ukuran: 120,
  },
};

console.log();
console.log(rumah.alamat.jalan);
console.log(rumah.alamat.kota);

//Latihan 8 Array of Objects
const koleksiBuku = [
  (buku1 = {
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    penerbit: "Gramedia",
    tahunTerbit: "1990",
  }),
  (buku2 = {
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    penerbit: "Gramedia",
    tahunTerbit: "1950",
  }),
  (buku3 = {
    judul: "Sang Pemimpi",
    penulis: "Andrea Hirata",
    penerbit: "Gramedia",
    tahunTerbit: "2010",
  }),
];

koleksiBuku.forEach((buku) => console.log(buku.judul));

//Latihan 9 Filter array of objects

const bukuTerbaru = koleksiBuku.filter((buku) => {
  return buku.tahunTerbit > 2000;
});

console.log();
console.log(bukuTerbaru);

//Latihan 10 Membuat Todo List
const todoList = {
  todos: [],
  tambahTodo: function (task) {
    this.todos.push(task);
  },
};

todoList.tambahTodo("Belajar JavaScript");
todoList.tambahTodo("Belajar Java");
todoList.tambahTodo("Belajar C++");

console.log();
console.log(todoList);

//Latihan 11 Map array of objects
// const todoCompleted = todoList.map((todo) => {
//   return { ...todo, completed: true };
// });
// console.log();
// console.log(todoCompleted);

//Latihan 12 Reduce array of objects
// const todoCompleted = todoList.reduce((acc, todo) => {
//   return [...acc, { ...todo, completed: true }];
// }, []);
// console.log();
// console.log(todoCompleted);

//Latihan 13 Find array of objects
// const todoCompleted = todoList.find((todo) => {
//   return todo.title === "Belajar JavaScript";
// });
// console.log();
// console.log(todoCompleted);

//Latihan 14 FindIndex array of objects
// const todoCompleted = todoList.findIndex((todo) => {
//   return todo.title === "Belajar JavaScript";
// });
// console.log();
// console.log(todoCompleted);

//Latihan 15 Filter array of objects
// const todoCompleted = todoList.filter((todo) => {
//   return todo.title === "Belajar JavaScript";
// });
// console.log();
// console.log(todoCompleted);
