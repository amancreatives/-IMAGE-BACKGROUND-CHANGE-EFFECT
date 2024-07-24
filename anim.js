var ImgBox = document.querySelector(".imgBox");
var ImgWrap = document.querySelector(".imgWrap");
var originalImg= document.getElementById("ogImg");
var line = document.querySelector("#line");

originalImg.style.width = ImgBox.offsetWidth + "px";

var leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    ImgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}