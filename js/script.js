$(function(){
var script = document.createElement('script'); //変数名は適当なものにでも
script.src = "https://code.jquery.com/jquery-3.6.0.min.js"; //ファイルパス
document.head.appendChild(script); //<head>に生成
window.onload = function() {
  var cur = document.createElement('div');
  cur.className = "cursor";
  document.body.appendChild(cur); //<head>に生成
  
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
  const obj = document.getElementById(spinner);
  obj.classList.add("cursor");
  obj.classList.remove("spinner");


	
	//カーソル要素の指定
	var cursor=$(".cursor");
	
	//mousemoveイベントでカーソル要素を移動させる
	$(document).on("mousemove",function(e){
    //カーソルの座標位置を取得
		var x=e.clientX;
		var y=e.clientY;
		//カーソル要素のcssを書き換える用
		cursor.css({
			"opacity":"1",
			"top":y+"px",
			"left":x+"px"
		});
	});
	}
})
