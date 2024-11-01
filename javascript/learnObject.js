//Object diri sendiri
const dataDiri = {
  firstName: "Hafidz",
  secondName: "Nurudien",
  age: 23,
  address: {
    city: "Cirebon",
    country: "Indonesia",
  },
};

//cetak object
console.log(dataDiri.age);
console.log(dataDiri.secondName);

//manipulasi object, ubah umur
dataDiri.age = 20;
console.log(dataDiri.age);

//hapus property
delete dataDiri.country;
console.log(dataDiri.country); //undefined
