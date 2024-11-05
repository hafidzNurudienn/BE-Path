//Latihan 1 Asychronous Function Callback
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log(`Processing: ${data}`);
}

// Pemanggilan
fetchData(processData);
