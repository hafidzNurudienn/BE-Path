function perkalian(x, y) {
  const hasilPerkalian = x * y;
  console.log(`Hasil dari perkalian ${x} dan ${y} adalah = ${hasilPerkalian}`);
  return hasilPerkalian;
}
perkalian(5, 4);

//Konversi jam menjadi detik
function howManySeconds(hours) {
  if (hours <= 0) {
    console.error("Error: Hours must be greater than 0");
    throw new Error("Hours must be greater than 0");
  }

  const convertToSeconds = hours * 3600;
  return convertToSeconds;
}

console.log(howManySeconds(2));
// console.log(howManySeconds(0)); thrown an error

// Check if a number is odd or even
function checkOddEven(number) {
  if (number <= 0) {
    throw new Error("Number must be greater than 0");
  } else {
    if (number % 2 == 0) {
      return `${number} is Even`;
    } else {
      return `${number} is Odd`;
    }
  }
}
console.log(checkOddEven(2));

//count square area
function squareArea(side) {
  const squareArea = side * side;
  console.log(`Luas persegi = ${squareArea}`);
  return squareArea;
}
squareArea(4);

//convert temperature from Fahrenheit to Celcius
function convertTemperature(celcius) {
  const Fahrenheit = (celcius * 9) / 5 + 32;
  // return Fahrenheit;
  console.log(`Celcius = ${celcius}, Convert to Fahrenheit = ${Fahrenheit}`);
}
convertTemperature(36);
convertTemperature(10);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n > 1) {
    return n * factorial(n - 1);
  }
}

function nilaiMaksimum(arr) {
  // Inisialisasi nilai maksimum dengan elemen pertama array
  let maksimum = arr[0];
  console.log(arr.length);
  // Loop melalui setiap elemen dalam array
  for (let i = 1; i < arr.length; i++) {
    // Jika elemen saat ini lebih besar dari nilai maksimum saat ini, perbarui nilai maksimum
    if (arr[i] > maksimum) {
      maksimum = arr[i];
    }
  }

  // Kembalikan nilai maksimum
  return maksimum;
}

console.log(nilaiMaksimum([3, 5, 7, 2, 8])); // Output: 8

function perkalian(x, y) {
  const hasilPerkalian = x * y;
  console.log(`Hasil dari perkalian ${x} dan ${y} adalah = ${hasilPerkalian}`);
  return hasilPerkalian;
}
perkalian(5, 4);

//Konversi jam menjadi detik
function howManySeconds(hours) {
  if (hours <= 0) {
    console.error("Error: Hours must be greater than 0");
    throw new Error("Hours must be greater than 0");
  }

  const convertToSeconds = hours * 3600;
  return convertToSeconds;
}

console.log(howManySeconds(2));
// console.log(howManySeconds(0)); thrown an error

// Check if a number is odd or even
function checkOddEven(number) {
  if (number <= 0) {
    throw new Error("Number must be greater than 0");
  } else {
    if (number % 2 == 0) {
      return `${number} is Even`;
    } else {
      return `${number} is Odd`;
    }
  }
}
console.log(checkOddEven(2));

//count square area
function squareArea(side) {
  const squareArea = side * side;
  console.log(`Luas persegi = ${squareArea}`);
  return squareArea;
}
squareArea(4);

//convert temperature from Fahrenheit to Celcius
function convertTemperature(celcius) {
  const Fahrenheit = (celcius * 9) / 5 + 32;
  // return Fahrenheit;
  console.log(`Celcius = ${celcius}, Convert to Fahrenheit = ${Fahrenheit}`);
}
convertTemperature(36);
convertTemperature(10);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n > 1) {
    return n * factorial(n - 1);
  }
}

function nilaiMaksimum(arr) {
  // Inisialisasi nilai maksimum dengan elemen pertama array
  let maksimum = arr[0];
  console.log(arr.length);
  // Loop melalui setiap elemen dalam array
  for (let i = 1; i < arr.length; i++) {
    // Jika elemen saat ini lebih besar dari nilai maksimum saat ini, perbarui nilai maksimum
    if (arr[i] > maksimum) {
      maksimum = arr[i];
    }
  }

  // Kembalikan nilai maksimum
  return maksimum;
}

console.log(nilaiMaksimum([3, 5, 7, 2, 8])); // Output: 8
