"use strict";

var img1 = document.getElementById('center_div2_img');
var img2 = document.getElementById('center_div3_img');
var input1 = document.getElementById('center_input4');
var input2 = document.getElementById('center_input5');
var stop = false;

img1.onclick = function () {
  if (stop) {
    this.src = "src/img/img2/notsee.jpg";
    input1.type = "password";
  } else {
    this.src = "src/img/img2/see.jpg";
    input1.type = "text";
  }

  stop = !stop;
};

img2.onclick = function () {
  if (stop) {
    this.src = "src/img/img2/notsee.jpg";
    input2.type = "password";
  } else {
    this.src = "src/img/img2/see.jpg";
    input2.type = "text";
  }

  stop = !stop;
};