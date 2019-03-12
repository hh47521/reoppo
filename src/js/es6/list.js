
let phone = document.getElementById('second_a');
let top_2 = document.getElementById('navigator_phone'); // let $bag = $('.last_a');
// let $specialDiv = $('.top .special_div');

let bag = document.getElementById('last_a');
let specialDiv = document.getElementById('special_div');

phone.onmouseenter = function () {
  top_2.style.display = 'block';
};

top_2.onmouseleave = function () {
  top_2.style.display = 'none';
}; // $bag.click(function(){
// 	$specialDiv.css('display','block');
// })


bag.onclick = function () {
  specialDiv.style.display = 'block';
};

specialDiv.onmouseleave = function () {
  specialDiv.style.display = 'none';
};