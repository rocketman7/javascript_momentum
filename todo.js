const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; //to-do list를 위한 empty array

function delToDo(event) {
  // console.log(event.target.ElementNode); //father class(id) 필요, console.dir(event.target) 들어가서 id 어디로 가야 찾을 수 있는지 체크
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    // console.log(li.id, toDo.id);
    return toDo.id !== parseInt(li.id); //string을 number로
  });
  toDos = cleanToDos;
  saveToDos();
} //html에서 지우기

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  console.log(text);
  const list = document.createElement("li"); //비어있는 리스트 생성, createElement 안에 tag name이 들어가야 함
  const delBtn = document.createElement("button"); // 버튼 만듬
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", delToDo);
  const span = document.createElement("span"); //span 만들고
  const newID = toDos.length + 1;
  span.innerText = text;
  list.appendChild(delBtn); //버튼을 li안에 넣음
  list.appendChild(span); //span을 li안에 넣고
  list.id = newID;
  toDoList.appendChild(list);
  const toDoObj = {
    text: text,
    id: newID
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const curntValue = toDoInput.value;
  paintToDo(curntValue);
  toDoInput.value = "";
}
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // console.log(loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      //array 안에서 forEach로 function생성
      paintToDo(toDo.text);
    });
    // console.log(parsedToDos);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
