

let hawaii_tab = document.querySelector("#hawaii_tab");
let athen_tab = document.querySelector("#venice_tab");
let rome_tab = document.querySelector("#tokyo_tab");

let vacation_destination = document.querySelector("#vacation_destination");

let image_section = document.querySelector("#image_section");
let image_section1 = document.querySelector("#image_section1");
let image_section2 = document.querySelector("#image_section2");
let image_section3 = document.querySelector("#image_section3");

hawaii_tab.addEventListener("click", function() {
  document.location.href = "http://localhost:3000/vacation?destination=Hawaii";
});
venice_tab.addEventListener("click", function() {
  document.location.href = "http://localhost:3000/vacation?destination=Venice";
});
tokyo_tab.addEventListener("click", function() {
  document.location.href = "http://localhost:3000/vacation?destination=Tokyo";
});
