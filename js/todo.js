const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let storeTodo=[];
const TODOS_KEY="todolist";

function addCmt(){
    const p = document.createElement("p");
    p.innerText=`"괜찮아요, 아직 늦지않았아요. 바로 시작해봐요!"`;
    p.className="dontWorry";
    todoList.appendChild(p);
}
function delCmt(){
    const cmt = document.querySelector("#todo-list p");
    if(cmt)
        todoList.removeChild(cmt);
}

function handleRemove(select){
    // console.dir("target - ",select.target);
    // console.log("parentElement - ",select.target.parentElement);
    // const delSelect = select.target.parentElement;
    // const delSelect = document.querySelector(`${select.num}`);
    const delSelect = select.target.parentElement;
    console.log(delSelect.id);
    console.log("d",storeTodo);
    storeTodo = storeTodo.filter((todo) => todo.num !== parseInt(delSelect.id));
    delSelect.remove();
    saveTodo()
    // downTodo.filter(delStore)
    if(todoList.childElementCount===0)
        addCmt();  
}

function paintTodo(todoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=todoObj.val;
    const button = document.createElement("button");
    button.innerText="✖"; 
    todoList.appendChild(li);
    li.id=todoObj.num;
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", handleRemove);
}

function saveTodo(){
    const jsonTodo = JSON.stringify(storeTodo);
    localStorage.setItem(TODOS_KEY,jsonTodo); 
    // const downTodo = localStorage.getItem("todolist");
    // const parseTodo = JSON.parse(downTodo);
    // paintTodo(parseTodo)
}
// const newTodo={
//     num:"",
//     val:""
// }
function handleTodoSubmit(event){
    event.preventDefault();
    // newTodo.num = Date.length;
    // newTodo.val = todoInput.value;
    const newTodo = todoInput.value;
    const todoObj = {
        num:Date.now(),
        val:newTodo
    }
    storeTodo.push(todoObj);
    todoInput.value="";
    paintTodo(todoObj);
    saveTodo();
    delCmt();
}

todoForm.addEventListener("submit",handleTodoSubmit);

let getTodo = localStorage.getItem(TODOS_KEY);

if(getTodo !==null){
    const parseTodo = JSON.parse(getTodo);
    storeTodo=parseTodo;
    parseTodo.forEach(paintTodo);
}else if(getTodo ===null){
    addCmt()
}

