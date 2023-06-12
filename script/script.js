$(document).ready(function(){
  $(window).scroll(function(){ 
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
    // console.log(height)
    if(height >= 800){ 
        $('header').addClass('on'); 
    }else if(height <= 799){ 
        $('header').removeClass('on'); 
    } 
  });//end 
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
    $('header a').mouseenter(function(){
      $('.theBall-outer').addClass('zoom');
    });
    $('header a').mouseleave(function(){
      $('.theBall-outer').removeClass('zoom');
    });
    $('.git_link').mouseenter(function(){
      $('.theBall-outer').addClass('zoom3');
    });
    $('.git_link').mouseleave(function(){
      $('.theBall-outer').removeClass('zoom3');
    });
  })//end cursor
  //scroll animation
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );//end scroll animation
});//document end
