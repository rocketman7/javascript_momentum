const body = document.querySelector("body");

const IMG_NUMBER = 5;
// function handleImgLoad() {
//   console.log("finished loading");
// }

function paintImg(imgNumber) {
  const img = new Image();
  img.src = `img/${imgNumber + 1}.jpg`;
  img.classList.add("bgImg");
  body.appendChild(img);
  //   img.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number; //math.floor: 소수점 버림, math.ceil: 소수점 올림
}
function init() {
  const randomNo = genRandom();
  paintImg(randomNo);
}

init();
