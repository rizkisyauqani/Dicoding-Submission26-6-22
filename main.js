const todos = [];
const RENDER_EVENT = "render-todo";

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("inputBook");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
  });
});

function addTodo() {
  const textTodo = document.getElementById("inputBookTitle").value;
  const timeStamp = document.getElementById("inputBookYear").value;
  const author = document.getElementById("inputBookAuthor").value;

  const generatedID = generateId();
  const todoObject = generateTodoObject(
    generatedID,
    textTodo,
    author,
    timeStamp,
    false,
  );
  todos.push(todoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
}

function generateId() {
  return +new Date();
}

function generateTodoObject(id, task, author, timeStamp, isCompleted) {
  return {
    id,
    task,
    author,
    timeStamp,
    isCompleted,
  };
}

document.addEventListener(RENDER_EVENT, function () {
  // console.log(todos);
  const uncompletedTODOList = document.getElementById("belumSelesaiBaca");
  uncompletedTODOList.innerHTML = "";

  const completedTODOList = document.getElementById("SelesaiBaca");
  completedTODOList.innerHTML = "";

  for (const todoItem of todos) {
    const todoElement = makeTodo(todoItem);
    if (!todoItem.isCompleted) {
      uncompletedTODOList.append(todoElement);
    } else {
      completedTODOList.append(todoElement);
    }
  }
});

function makeTodo(todoObject) {
  const textTitle = document.createElement("h2");
  textTitle.innerText = todoObject.task;

  const textTimestamp = document.createElement("p");
  textTimestamp.innerText = todoObject.timeStamp;

  const textAuthor = document.createElement("p");
  textAuthor.innerText = todoObject.author;

  const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  textContainer.append(textTitle, textAuthor, textTimestamp);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.append(textContainer);
  container.setAttribute("id", `todo-${todoObject.id}`);

  if (todoObject.isCompleted) {
    const undoButton = document.createElement("button");
    undoButton.classList.add("undo-button");

    undoButton.addEventListener("click", function () {
      undoTaskFromCompleted(todoObject.id);
    });

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");

    trashButton.addEventListener("click", function () {
      removeTaskFromClompeted(todoObject.id);
    });

    container.append(undoButton, trashButton);
  } else {
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-button");

    checkButton.addEventListener("click", function () {
      addTaskToCompleted(todoObject.id);
    });

    container.append(checkButton);
  }

  return container;
}

function addTaskToCompleted(todoId) {
  const todoTarget = findTodo(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function findTodo(todoId) {
  for (const todoItem of todos) {
    if (todoItem.id == todoId) {
      return todoItem;
    }
  }
  return null;
}

function removeTaskFromClompeted(todoId) {
  const todoTarget = findTodoIndex(todoId);

  if (todoTarget === -1) return;

  todos.splice(todoTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function undoTaskFromCompleted(todoId) {
  const todoTarget = findTodo(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function findTodoIndex() {
  for (const index of todos) {
    if (todos[index].id === todoId) {
      return index;
    }
  }
  return -1;
}
