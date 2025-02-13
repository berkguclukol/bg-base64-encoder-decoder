const EncodeButtonEl = document.getElementById("EncodeButton");
const DecodeButtonEl = document.getElementById("DecodeButton");
const inputStringEl = document.getElementById("inputString");

EncodeButtonEl.addEventListener("click", (e) => {
  let inputStringValue = inputStringEl.value.trim();
  inputStringEl.value = btoa(inputStringValue);
})

DecodeButtonEl.addEventListener("click", (e) => {
  let inputStringValue = inputStringEl.value.trim();
  inputStringEl.value = atob(inputStringValue);
})

