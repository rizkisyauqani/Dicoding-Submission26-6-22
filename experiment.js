const formElement = document.getElementById("inputBook");
const submitButton = document.getElementById("bookSubmit");
const belumSelesai = document.getElementById("belumSelesaiBaca");
const selesai = document.getElementById("SelesaiBaca");
const nampungKeSelesai = "";

const pushKeSelesai = [];

const dataBuku = {
  id: "",
  title: "",
  author: "",
  year: "",
  isComplete: "",
};

function formHandling(event) {
  event.preventDefault();
}

function submitFormData() {
  const judul = document.getElementById("inputBookTitle").value;
  const penulis = document.getElementById("inputBookAuthor").value;
  const tahun = document.getElementById("inputBookYear").value;
  const kotakCentang = document.getElementById("inputBookIsComplete").checked;
  dataBuku.id = +new Date();
  dataBuku.title = judul;
  dataBuku.author = penulis;
  dataBuku.year = tahun;
  dataBuku.isComplete = kotakCentang;
  if (kotakCentang === false) {
    const nampungId = document.createElement("p");
    const nampungJudul = document.createElement("h3");
    const nampungPenulis = document.createElement("p");
    const nampungTahun = document.createElement("p");
    nampungId.textContent = dataBuku.id;
    nampungJudul.textContent = dataBuku.title;
    nampungPenulis.textContent = dataBuku.author;
    nampungTahun.textContent = dataBuku.year;
    belumSelesai.append(nampungId, nampungJudul, nampungPenulis, nampungTahun);
    const tombolHijau = document.getElementById("bukuSelesaiBaca");
    const tombolMerah = document.getElementById("hapusBukuBelumSelesaiBaca");
    tombolHijau.addEventListener("click", function (target) {
      const nampungkeSelesaiDiv = document.createElement("div");
      nampungkeSelesaiDiv.append(pushKeSelesai);
      target = findTodo(dataBuku.id);
      if (target === null) return;

      dataBuku.isComplete;
      pushKeSelesai(nampungId, nampungJudul, nampungPenulis, nampungTahun);
    });
  } else {
    const nampungId = document.createElement("p");
    const nampungJudul = document.createElement("h3");
    const nampungPenulis = document.createElement("p");
    const nampungTahun = document.createElement("p");
    nampungId.textContent = dataBuku.id;
    nampungJudul.textContent = dataBuku.title;
    nampungPenulis.textContent = dataBuku.author;
    nampungTahun.textContent = dataBuku.year;
    selesai.append(nampungId, nampungJudul, nampungPenulis, nampungTahun);
    const greenButton = document.getElementById("bukuBelumSelesaiBaca");
    const redButton = document.getElementById("hapusBukuSelesaiBaca");
  }
}
formElement.addEventListener("submit", formHandling);
submitButton.addEventListener("click", submitFormData);
