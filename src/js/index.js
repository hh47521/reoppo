let phone = document.getElementById('second_a');
let top_2 = document.getElementById('navigator_phone');
phone.onmouseenter = function(){
	top_2.style.display = 'block';
}
top_2.onmouseleave = function(){
	top_2.style.display = 'none';
}