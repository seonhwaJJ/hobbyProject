// 유저는 할일을 추가할수있다.
// 각 할일에 삭제와 체크 버튼이있다.
// 삭제버튼을 클릭하면 할일이 리스트에서 삭제된ㄷㅏ.
// 체크버튼을 누르면 할일이 끝난것으로 간주하고 밑줄이 간다.
// 끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼수있다.
// 모바일 버전에서도 확인할수있는 반응형웹이다.

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".tabHead span");
let mode = "all";
let filterList=[];
let taskList = [];
for (let i = 0; i<tabs.length; i++) {
    tabs[i].addEventListener("click",function(event){
        filter(event);
    })
}

addButton.addEventListener("click", todoAdd);

function todoAdd(){
    let task = {
        id : randomId(),
        taskContent : taskInput.value,
        isComplete : false
    };
    taskList.push(task);
    taskInput.value = "";
    render();
}
function filter(event){
    mode = event.target.id;
    for (let i = 0; i <tabs.length; i++) {
        tabs[i].classList.remove("active");
    } 
    event.target.classList.add("active");
    render();
}
function render(){
    let resultHTML = "";
    let list = [];
    if(mode == "all") {
        list = taskList;
    }else if(mode == "ing" || mode == "end") {
        list = taskList.filter(task => (mode === "ing") ? !task.isComplete : task.isComplete);
    }
    for (let i = 0; i < list.length; i++) {
            resultHTML += `<li class="todoList" id="task-list">
            <p onclick="toggleComplete('${taskList[i].id}')" class="todoCheck ${list[i].isComplete ? 'is_done' : ''}">
                <span class="todoText">${taskList[i].taskContent}</span>
                <button type="button" class="todoDone"><i class="fa-solid ${list[i].isComplete ? 'fa-rotate-left' : 'fa-check'}"></i></button>
            </p>
            <button type="button" onclick="deleteTask('${taskList[i].id}')" class="todoDelete"><i class="fa-solid fa-trash"></i></button>
        </li>`;
    }
    document.getElementById("task-area").innerHTML = resultHTML;
}

function toggleComplete(id){
    for ( let i = 0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
}
function deleteTask(id){
    console.log(id);
    resultHTML = "";
    for ( let i = 0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1);
            break;
        }
    }
    render();
}
function randomId(){
    return '_'+Math.random().toString(36).substr(2,16);
}
