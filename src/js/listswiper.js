 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    width: 1440,
    height: 600,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
	  clickable :true,
    },
    
    //如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
	  
    },
    speed:3000,
    autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
  }) 
  mySwiper.el.onmouseover = function(){
      mySwiper.autoplay.stop();
     mySwiper.el.onmouseleave=(function () {
      mySwiper.autoplay.start();
      })
     }
