// 外部链接自动新标签
document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll("a").forEach(a => {
    let href = a.getAttribute("href");
    // 判断外部网址（以http开头）
    if(href && href.startsWith("http")){
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  })
})