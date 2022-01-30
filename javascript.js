// Write JavaScript here 
var path = location.pathname;
if(path.includes("index") ){
  var home = document.getElementById("home");
  home.removeAttribute("href");
  home.removeAttribute("class");
  home.id = "not_links";
}
