"use strict";

var phone = document.getElementById('second_a');
var top_2 = document.getElementById('navigator_phone'); // let $bag = $('.last_a');
// let $specialDiv = $('.top .special_div');

var bag = document.getElementById('last_a');
var specialDiv = document.getElementById('special_div');

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
}; //获取非行内样式


function getStyle(obj, attr) {
  return window.getComputedStyle ? getComputedStyle(obj, 1)[attr] : obj.currentStyle[attr];
} //运动框架


function sport(obj, json, fn) {
  //1. 清除上一次的计时器
  clearInterval(obj.timer); //2. 添加新的计时器

  obj.timer = setInterval(function () {
    //1. 开关
    var stop = true; //2. 遍历json

    for (var attr in json) {
      //1. 获取当前值
      var cur = attr === 'opacity' ? parseInt(parseFloat(getStyle(obj, attr)) * 100) : parseInt(getStyle(obj, attr)); //2. 计算速度

      var speed = (json[attr] - cur) / 6;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //3. 判断是否达到目标

      if (cur !== json[attr]) {
        stop = false;
      } //4. 设置运动


      if (attr === 'opacity') {
        obj.style.opacity = (cur + speed) / 100;
        obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
      } else {
        obj.style[attr] = cur + speed + 'px';
      }
    } //3. 停止计时器


    if (stop) {
      clearInterval(obj.timer);

      if (typeof fn === 'function') {
        fn();
      }
    }
  }, 30);
}

var oLi1 = document.getElementById('center_ul1');
var oLi2 = document.getElementById('center_ul2');
var oLi3 = document.getElementById('center_ul3');
var oDiv1 = document.getElementById('center_div1');
var oDiv2 = document.getElementById('center_div2');
var oDiv3 = document.getElementById('center_div3');

oLi1.onclick = function () {
  oDiv1.style.opacity = sport(oDiv1, {
    "opacity": 100
  });
  oDiv2.style.opacity = sport(oDiv2, {
    "opacity": 0
  });
  oDiv3.style.opacity = sport(oDiv3, {
    "opacity": 0
  });
};

oLi2.onclick = function () {
  oDiv1.style.opacity = sport(oDiv1, {
    "opacity": 0
  });
  oDiv2.style.opacity = sport(oDiv2, {
    "opacity": 100
  });
  oDiv3.style.opacity = sport(oDiv3, {
    "opacity": 0
  });
};

oLi3.onclick = function () {
  oDiv1.style.opacity = sport(oDiv1, {
    "opacity": 0
  });
  oDiv2.style.opacity = sport(oDiv2, {
    "opacity": 0
  });
  oDiv3.style.opacity = sport(oDiv3, {
    "opacity": 100
  });
};

var $li = $('.navigator ul li');
var $div = $('.special'); //$div.load('paging1.html');
//$div.load('paging2.html');

$(function () {
  $div.load("paging1.html");
});
$li.each(function (index, value) {
  $(value).mouseenter(function () {
    $(value).css({
      'background': 'white',
      'color': '#4cca98'
    }); //$div.load("paging1.html");

    $div.load("paging" + (index + 1) + ".html");
    $(value).mouseleave(function () {
      $(value).css({
        'background': '',
        'color': ''
      });
    });
  });
});