const books = [];
const RENDER_EVENT = "render-todo";

document.addEventListener("DOMContentLoaded", function () {
  const submitFormElement = document.getElementById("inputBook");
  submitFormElement.addEventListener("submit", function (event) {
    event.preventDefault();
    addBookDatas();

    if (isStorageExist()) {
      loadDataFromStorage();
    }
  });
});

function addBookDatas() {
  const fieldJudulElement = document.getElementById("inputBookTitle").value;
  const fieldPenulisElement = document.getElementById("inputBookAuthor").value;
  const fieldTahunElement = document.getElementById("inputBookYear").value;
  const checkBoxElement = document.getElementById(
    "inputBookIsComplete",
  ).checked;

  const makeId = makeUniqueId();
  const todoObject = makeBookDatasObject(
    makeId,
    fieldJudulElement,
    fieldPenulisElement,
    fieldTahunElement,
    checkBoxElement,
  );
  books.push(todoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function makeUniqueId() {
  return +new Date();
}

function makeBookDatasObject(id, judul, penulis, tahun, isCompleted) {
  return {
    id,
    judul,
    penulis,
    tahun,
    isCompleted,
  };
}

document.addEventListener(RENDER_EVENT, function () {
  console.log(books);

  const uncompletedTODOList = document.getElementById("belumSelesaiBaca");
  uncompletedTODOList.innerHTML = "";

  const completedTODOList = document.getElementById("SelesaiBaca");
  completedTODOList.innerHTML = "";

  for (const book of books) {
    const todoElement = makeBookDatas(book);
    if (!book.isCompleted) {
      uncompletedTODOList.append(todoElement);
    } else {
      completedTODOList.append(todoElement);
    }
  }
});

function findBookDatas(todoId) {
  for (book of books) {
    if (book.id === todoId) {
      return book;
    }
  }
  return null;
}

function findBookDatasIndex(todoId) {
  for (index in books) {
    if (books[index].id === todoId) {
      return index;
    }
  }
  return -1;
}

// function findBookDatas(todoId) {
//   for (todoItem of books) {
//     if (todoItem.id === todoId) {
//       return todoItem;
//     }
//   }
//   return null;
// }

function makeBookDatas(todoObject) {
  const { id, judul, penulis, tahun, isCompleted } = todoObject;
  //   const belumSelesaiElement = document.getElementById("belumSelesaiBaca");
  //   const SelesaiElement = document.getElementById("SelesaiBaca");

  const textJudul = document.createElement("h2");
  textJudul.innerText = judul;

  const textPenulis = document.createElement("p");
  textPenulis.innerText = penulis;

  const textTahun = document.createElement("p");
  textTahun.innerText = tahun;

  const checkBoxElement = document.getElementById("inputBookIsComplete");
  checkBoxElement.checked = isCompleted;

  const textContainer = document.createElement("div");
  textContainer.append(textJudul, textPenulis, textTahun);

  const container = document.createElement("div");
  container.append(textContainer);
  container.setAttribute("id", `todo-${id}`);

  if (isCompleted) {
    const undoButton = document.createElement("button");
    undoButton.innerText = "Belum Selesai";
    undoButton.addEventListener("click", function () {
      undoTaskFromClompeted(id);
    });

    const trashButton = document.createElement("button");
    trashButton.innerText = "hapus";
    trashButton.addEventListener("click", function () {
      removeTaskFromCompleted(id);
    });

    container.append(undoButton, trashButton);
    // SelesaiElement.append(container);
  } else {
    const checkButton = document.createElement("button");
    checkButton.innerText = "Selesai";
    checkButton.addEventListener("click", function () {
      addTaskToCompleted(id);
    });

    const trashButton = document.createElement("button");
    trashButton.innerText = "hapus";
    trashButton.addEventListener("click", function () {
      removeTaskFromCompleted(id);
    });

    container.append(checkButton, trashButton);
    // belumSelesaiElement.append(container);
  }
  return container;
}

function addTaskToCompleted(todoId) {
  const todoTarget = findBookDatas(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function removeTaskFromCompleted(todoId) {
  const todoTarget = findBookDatasIndex(todoId);

  if (todoTarget === -1) return;

  books.splice(todoTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function undoTaskFromClompeted(todoId) {
  const todoTarget = findBookDatas(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

const submitButtonElement = document.getElementById("bookSubmit");
submitButtonElement.addEventListener("click", makeBookDatas);

const STORAGE_KEY = "BOOK_DATA_APPS";
const SAVED_EVENT = "saved-book-data";

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function isStorageExist() {
  if (typeof (Storage === undefined)) {
    console.log("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

document.addEventListener(SAVED_EVENT, function () {
  console.log(localStorage.getItem(STORAGE_KEY));
});

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const todo of data) {
      books.push(todo);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}

window.addEventListener("load", function () {
  isStorageExist();
});
