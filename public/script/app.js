const EncodeButtonEl = document.getElementById("EncodeButton");
const DecodeButtonEl = document.getElementById("DecodeButton");
const sourceStringEl = document.getElementById("sourceString");
const destinationStringEl = document.getElementById("destinationString");

EncodeButtonEl.addEventListener("click", (e) => {
  destinationStringEl.value = btoa(sourceStringEl.value);
})

DecodeButtonEl.addEventListener("click", (e) => {
  destinationStringEl.value = atob(sourceStringEl.value);
})

