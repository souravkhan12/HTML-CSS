var num = Math.floor(Math.random() * 6) + 1;
var image = "dice" + num + ".png";
var image1 = "/images/" + image;
var im1 = document.querySelectorAll("img")[0];
im1.setAttribute("src", image1);

var num1 = Math.floor(Math.random() * 6) + 1;
var image1 = "dice" + num1 + ".png";
var image2 = "/images/" + image1;
var im2 = document.querySelectorAll("img")[1];
im2.setAttribute("src", image2);

if (num > num1) {
    document.querySelector(".invisible").innerHTML = "Player-1-wins";
} else {
    document.querySelector(".invisible").innerHTML = "Player-2-wins";
}