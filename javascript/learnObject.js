//Latihan 1
const mobil = {
  merk: "Toyota",
  tahun: "2020",
  warna: "hitam",
};
console.log(mobil.merk);
console.log(mobil.tahun);
console.log(mobil.warna);

//Latihan 2
mobil.harga = 5000000;
mobil.warna = "putih";
console.log(mobil);

//Latihan 3
mobil.deskripsi = function () {
  return `Mobil ini adalah ${this.merk} tahun ${this.tahun} dan berwarna ${this.warna}`;
};
console.log(mobil.deskripsi());

//Latihan 4
// Membuat constructor function Laptop
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
