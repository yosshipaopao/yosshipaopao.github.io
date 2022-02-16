var script = document.createElement('script'); //変数名は適当なものにでも
script.src = "https://code.jquery.com/jquery-3.6.0.min.js"; //ファイルパス
document.head.appendChild(script);

var script = document.createElement('script'); //変数名は適当なものにでも
script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"; //ファイルパス
document.head.appendChild(script);

 window.addEventListener('load', function(){
  var cur = document.createElement('div');
  var cur2 = document.createElement('div');
  cur.id = "cursor";
  cur2.id = "follower";
  document.body.appendChild(cur);
  document.body.appendChild(cur2); 
  
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
    $(function(){
    
	//カーソル要素の指定
	var
cursor = $("#cursor"),
follower = $("#follower"),
cWidth = 8, //カーソルの大きさ
fWidth = 40, //フォロワーの大きさ
delay = 10, //数字を大きくするとフォロワーがより遅れて来る
mouseX = 0, //マウスのX座標
mouseY = 0, //マウスのY座標
posX = 0, //フォロワーのX座標
posY = 0; //フォロワーのX座標

//カーソルの遅延アニメーション
//ほんの少ーーーしだけ遅延させる 0.001秒
TweenMax.to({}, .001, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;
    
    TweenMax.set(follower, {
        css: {    
          left: posX - (fWidth / 2),
          top: posY - (fWidth / 2)
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
          left: mouseX - (cWidth / 2),
          top: mouseY - (cWidth / 2)
        }
    });
  }
});

//マウス座標を取得
$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});
$(document).on("scroll", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});
$("body").on({
  "mouseenter": function() {
    cursor.removeClass("mouseleave");
    follower.removeClass("mouseleave");
  },
  "mouseleave": function() {
    cursor.addClass("mouseleave");
    follower.addClass("mouseleave");
  }
});
$("iframe").on({
  "mouseenter": function() {
    cursor.addClass("mouseleave");
    follower.addClass("mouseleave");
  },
  "mouseleave": function() {
    cursor.removeClass("mouseleave");
    follower.removeClass("mouseleave");
  }
});

      
$("a").on({
  "mouseenter": function() {
    cursor.addClass("active");
    follower.addClass("active");
  },
  "mouseleave": function() {
    cursor.removeClass("active");
    follower.removeClass("active");
  }
});
$("button").on({
  "mouseenter": function() {
    cursor.addClass("active");
    follower.addClass("active");
  },
  "mouseleave": function() {
    cursor.removeClass("active");
    follower.removeClass("active");
  }
});

      
});
});
