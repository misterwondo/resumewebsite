var box1 = document.getElementById("s1")
var box2 = document.getElementById("s2")
var box3 = document.getElementById("s3")
var box4 = document.getElementById("s4")
var box5 = document.getElementById("skillList")
var box6 = document.getElementById("contactbox")

var nameText = document.getElementById("name")
var heyText = document.getElementById("introText")
var stats = document.getElementById("stats")

setTimeout(function() {

    showBox(heyText);

}, 1000);

setTimeout(function() {

    showBox(nameText);

}, 2000);

setTimeout(function() {

    showBox(stats);

}, 3000);


setTimeout(function() {

    showBox(box1);

}, 4000);

setTimeout(function() {

    showBox(box2);

}, 4500);

setTimeout(function() {

    showBox(box3);

}, 5000);

setTimeout(function() {

    showBox(box4);

}, 5500);

setTimeout(function() {

    showBox(box5);

}, 6000);

setTimeout(function() {

    showBox(box6);

}, 6500);


function showBox(box){
    box.style.opacity = "100%";
}

function redirecttw(){
    window.open('http://twitter.com', '_blank');
}

function redirectface(){
    window.open('http://facebook.com', '_blank');
}

function redirectinsta(){
    window.open('http://instagram.com', '_blank');

}