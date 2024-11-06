//Latihan 1 coba asyncronous
let janjiTraktir = new Promise((resolve, reject) => {
  let adaDuit = true; //BBH udah cair!!
  if (adaDuit) {
    resolve("Traktir Makan!");
  } else {
    reject("Gajadi Traktir Makan!");
  }
});

janjiTraktir
  .then((pesan) => {
    console.log(pesan); //Traktir Makan!
  })
  .catch((error) => {
    console.log(error); //Gajadi Traktir Makan!
  });

//Latihan 2 asyncronous await
async function traktirMakan() {
  let adaUang = true;

  try {
    if (!adaUang) throw "Belum ada uanggg, gajadi traktir makan";
    let pesan = await janjiTraktir;
    console.log(pesan); //"Traktir Makan!!"
  } catch (error) {
    console.log(error); //Belum ada uanggg, gajadi traktir makan
  }
}

traktirMakan();
