const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const mins = date.getMinutes();
  const hours = date.getHours();
  const sec = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    mins < 10 ? `0${mins}` : mins
  }:${sec < 10 ? `0${sec}` : sec}`;
  //ternary operator: like mini if
}

function init() {
  getTime();
  setInterval(getTime, 1000); //ms 단위
}

init();
