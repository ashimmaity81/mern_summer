const searchQuesryStr = window.location.search;
const res = searchQuesryStr.split("=");
const videoId = res[1];

const iframe = document.getElementsByTagName("iframe")[0];
iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
