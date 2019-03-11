"use strict";

// let $acc = $('#message #message_row1 a');
// let $message1 = $('#message_row2')
// let $message2 = $('#message_row3')
// $acc.each(function(index,value){
// 	$(value).click(function(){
// 		$message('index').css('display','bl)
// 	})
// })
var acc1 = document.getElementById('account_a1');
var acc2 = document.getElementById('account_a2');
var message1 = document.getElementById('message_row2');
var message2 = document.getElementById('message_row3');

acc1.onclick = function () {
  message2.style.display = 'none';
  message1.style.display = 'block';
  acc1.style.color = '#2ad181';
  acc2.style.color = '#5a5a5a';
};

acc2.onclick = function () {
  message1.style.display = 'none';
  message2.style.display = 'block';
  acc2.style.color = '#2ad181';
  acc1.style.color = '#5a5a5a';
};