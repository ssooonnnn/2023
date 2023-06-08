$(document).ready(function(){
  $(window).scroll(function(){ 
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    // console.log(height)
    if(height >= 800){ 
        $('header').addClass('on'); 
    }else if(height <= 799){ 
        $('header').removeClass('on'); 
    } 
  });
      // cursor 
  $(function() {
    var prefix = function() {
      var a = window.getComputedStyle(document.documentElement, ""),
        b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
      return "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1], "-" + b + "-"
    }();
    $(document).mousemove(function(e) {
      mouseX = e.pageX + 15;
      mouseY = e.pageY - $(window).scrollTop() + 15;
      $('.theBall-outer').attr('style', prefix + 'transform:translate(' + mouseX + 'px,' + mouseY + 'px)');
    });
  })
});
    //scrollmagic controller
    var controller = new ScrollMagic.Controller();
    //animation object
    var tween1 = TweenMax.to('.star', 0.5, {
      scale: 2.5,
      rotation: 180,
      x: 130
    });
    //scene object
    var scene = new ScrollMagic.Scene();
    //Animation Object를 Scene Object에 추가
    var scene = new ScrollMagic.Scene().setTween(tween1);
    // Scene Object를 ScrollMaig Controller에 추가
    var scene = new ScrollMagic.Scene()
    .setTween(tween1)
    .addTo(controller);
    //scene이 일어날 트리거를 지정
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger1"
    })
    .setTween(tween1)
    .addTo(controller);

	
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger1"
    })
    .setTween(tween1)
    .addTo(controller)
    .addIndicators({
      name: "1"
    });