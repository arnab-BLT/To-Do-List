//Selector
const todoInput = document.querySelector(".todo-list");
const todobutton = document.querySelector(".todobtn");
const todolist = document.querySelector(".todo-ul-wrapper");
const markList = document.querySelector(".filter-todo");
// Event Listener
document.addEventListener('DOMContentLoaded', getTodos);
todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click", dletetask);
markList.addEventListener("click", markListds);

//Functions

function addtodo(event) {
    event.preventDefault();
    if (todoInput.value != "") {

        // Create Div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create Li

        const todoLi = document.createElement('li');
        todoLi.innerText = todoInput.value;
        todoLi.classList.add("todoli");
        todoDiv.appendChild(todoLi);
        saveLocalstorage(todoInput.value);
        const donTask = document.createElement('button');
        donTask.classList.add('donetask');
        donTask.innerHTML = '<i class="fas fa-check"></i>';
        todoDiv.appendChild(donTask);

        const deleteTask = document.createElement('button');
        deleteTask.classList.add('deleteTask');
        deleteTask.innerHTML = '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(deleteTask);

        todolist.appendChild(todoDiv);


        todoInput.value = "";
    }






}

function dletetask(e) {
    const item = e.target;
    // console.log(e.target);
    if (item.classList[0] == "deleteTask") {
        const dtlPrant = item.parentElement;
        removelocalarrys(dtlPrant.childNodes[0]);
        // dtlPrant.style.display = "none";
        // console.log(dtlPrant);
        dtlPrant.remove();


    }
    if (item.classList[0] == "donetask") {
        const dtlPrant = item.parentElement;
        dtlPrant.classList.add("donetasked");
        // console.log(dtlPrant);

    }
}

function markListds(e) {
    const todos = todolist.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completedtask":
                if (todo.classList.contains("donetasked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "unuompleted":
                if (!todo.classList.contains("donetasked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalstorage(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [0];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));


}

function getTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [0];
        console.log(todo);
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    // todos.push(todo);
    // localStorage.setItem("todos", JSON.stringify(todos));

    todos.forEach(function(todo) {
        // Create Div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create Li

        const todoLi = document.createElement('li');
        todoLi.innerText = todo;
        todoLi.classList.add("todoli");
        todoDiv.appendChild(todoLi);
        const donTask = document.createElement('button');
        donTask.classList.add('donetask');
        donTask.innerHTML = '<i class="fas fa-check"></i>';
        todoDiv.appendChild(donTask);

        const deleteTask = document.createElement('button');
        deleteTask.classList.add('deleteTask');
        deleteTask.innerHTML = '<i class="fas fa-trash"></i>';
        todoDiv.appendChild(deleteTask);

        todolist.appendChild(todoDiv);


        // todoInput.value = "";
    });
}

function removelocalarrys(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    let deltlocalsrry = todo.innerText;
    todos.splice(todos.indexOf([deltlocalsrry]), 1);
    console.log(deltlocalsrry);
    localStorage.setItem("todos", JSON.stringify(todos));
}
// function saveLocalstorage(todo) {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }