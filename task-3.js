let T01 = document.querySelector("#T01");
T01.addEventListener ("mouseover" , function(event) {
T01.textContent = "Can i help you?";
});

let T01z = document.querySelector("#T01");
T01.addEventListener ("mouseout" , function(event) {
T01.textContent = "Hello world!";
});

document.addEventListener("DOMContentLoaded", function() {
var imageSelector = document.getElementById("imageSelector");
var T02 = document.getElementById("T02");
imageSelector.addEventListener("change", function() {
    var selectedImage = imageSelector.value;
    T02.src = selectedImage;
});
});

var fontFamilySelect = document.getElementById("T001");
var fontSizeSelect = document.getElementById("T002");
var italicCheckbox = document.getElementById("italic");
var boldCheckbox = document.getElementById("bold");
var underlineCheckbox = document.getElementById("underline");
var T003 = document.getElementById("T003");
fontFamilySelect.addEventListener("change", function() {
T003.style.fontFamily = fontFamilySelect.value;
});
fontSizeSelect.addEventListener("change", function() {
    T003.style.fontSize = fontSizeSelect.value;
});
italicCheckbox.addEventListener("change", function() {
    T003.style.fontStyle = italicCheckbox.checked ? "italic" : "normal";
});
boldCheckbox.addEventListener("change", function() {
    T003.style.fontWeight = boldCheckbox.checked ? "bold" : "normal";
});
underlineCheckbox.addEventListener("change", function() {
    T003.style.textDecoration = underlineCheckbox.checked ? "underline" : "none";
});



