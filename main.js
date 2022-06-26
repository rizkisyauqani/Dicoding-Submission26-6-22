const formElement = document.getElementById("inputBook");
const inputJudulBuku = document.getElementById("inputBookTitle");
const inputPenulisBuku = document.getElementById("inputBookAuthor");
const inputTahunBuku = document.getElementById("inputBookYear");
const centangSelesai = document.getElementById("inputBookIsComplete");

const submitButtonElement = document.getElementById("bookSubmit");

const bookDatas = {
  id: +new Date(),
  title: "",
  author: "",
  year: "",
  isComplete: false,
};

// const judulBuku = "";
// const penulisBuku = "";
// const tahunTerbit = "";

submitButtonElement.addEventListener("click", bookDataSubmit);
formElement.addEventListener("submit", bookDataForm);
// centangSelesai.addEventListener("change", checkButton);

function bookDataForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  for (key in bookDatas) {
    const idBuku = "";
    const judulBuku = formData.get("judulBuku");
    const penulisBuku = formData.get("penulisBuku");
    const tahunTerbit = formData.get("tahunTerbit");
    idBuku.textContent = bookDatas[key];
    judulBuku.textContent = bookDatas[key];
    penulisBuku.textContent = bookDatas[key];
    tahunTerbit.textContent = bookDatas[key];
    return idBuku, judulBuku, penulisBuku, tahunTerbit;
  }

  // const keteranganBuku = checkButton();
  // const judulBuku = (bookDatas.title = inputJudulBuku.value);
  // const penulisBuku = (bookDatas.author = inputPenulisBuku.value);
  // const tahunBuku = (bookDatas.year = inputTahunBuku.value);
  // checkButton();
}

function checkButton() {
  if (centangSelesai.checked) {
    console.log("Selesai");
  } else {
    console.log("tidak selesai");
  }
}

function bookDataSubmit(idBuku, judulBuku, penulisBuku, tahunTerbit) {
  const belumSelesaiBaca = document.getElementById("belumSelesaiBaca");
  const selesaiBaca = document.getElementById("SelesaiBaca");

  const containerIdBuku = document.createElement("p");
  const containerJudulBuku = document.createElement("h3");
  const containerPenulisBuku = document.createElement("p");
  const containerTahunBuku = document.createElement("p");

  containerIdBuku.textContent = idBuku;
  containerJudulBuku.textContent = judulBuku;
  containerPenulisBuku.textContent = penulisBuku;
  containerTahunBuku.textContent = tahunTerbit;

  if (centangSelesai.checked === false) {
    belumSelesaiBaca.append(
      containerIdBuku,
      containerJudulBuku,
      containerPenulisBuku,
      containerTahunBuku,
    );
  } else {
    selesaiBaca.append(
      containerIdBuku,
      containerJudulBuku,
      containerPenulisBuku,
      containerTahunBuku,
    );
    return;
  }
}

function saveBookData() {
  bookDataSubmit();
}

const angka = [0, 1, 2, 3, 4, 5];

console.log(angka.length);
