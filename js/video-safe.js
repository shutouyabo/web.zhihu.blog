document.addEventListener("DOMContentLoaded", function () {
  // 全局视频禁止下载
  const allVideos = document.querySelectorAll("video");
  allVideos.forEach(video => {
    video.setAttribute("controlslist", "nodownload");
    video.oncontextmenu = () => false;
    video.addEventListener("dragstart", e => e.preventDefault());
  });

  // 拦截Ctrl+S保存页面
  document.addEventListener("keydown", e => {
    if (e.ctrlKey && (e.key === "s" || e.key === "S")) {
      e.preventDefault();
    }
  });

  // 所有外网链接自动新标签打开
  document.querySelectorAll("a").forEach(a => {
    let href = a.getAttribute("href");
    if(href && href.startsWith("http")){
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  })
});
