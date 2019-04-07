const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
//locaal storage: 정보를 유저 컴퓨터에 저장하는 것

const USER_LS = "curntUser",
  SHOWING_ON = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault(); //default로 돌아가는 것을 방지
  const curntValue = input.value;
  // console.log(curntValue);
  paintGreeting(curntValue);
  saveName(curntValue);
}

function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const curntUser = localStorage.getItem(USER_LS);
  if (curntUser === null) {
    askForName();
  } else {
    paintGreeting(curntUser);
  }
}
function init() {
  loadName();
}

init();
