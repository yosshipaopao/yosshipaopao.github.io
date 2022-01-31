// Write JavaScript here 
var path = location.pathname;
if(path.includes("index") || path == "www.yosshipaopao.cf" || path == "www.yosshipaopao.cf/"){
  var home = document.getElementById("home");
  home.removeAttribute("href");
  home.removeAttribute("class");
  home.id = "not_links";
}
