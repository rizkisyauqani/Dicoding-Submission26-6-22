const books = [];
let data = "";

// select HTML elements
const formElement = document.getElementById("inputBook");

// addEventListener to HTML elements
formElement.addEventListener("submit", form);

function form(event) {
  event.preventDefault();
}

function bookDatas() {
  const judul = document.getElementById("inputBookTitle");
  const penulis = document.getElementById("inputBookAuthor");
  const tahun = document.getElementById("inputBookYear");
  const kotakCentang = document.getElementById("inputBookIsComplete");
  const dataBuku = {
    id: +new Date(),
    title: judul.value,
    author: penulis.value,
    year: tahun.value,
    isCompleted: kotakCentang.checked,
  };
  console.log(dataBuku);
  books.push(dataBuku);
  document.dispatchEvent(new Event("tambah data"));
}

function addBookDatas() {
  bookDatas();
  const belumSelesaiBaca = document.getElementById("bukuBelumSelesaiDibaca");
  const SelesaiBaca = document.getElementById("bukuSelesaiDibaca");

  belumSelesaiBaca.innerHTML = "";
  SelesaiBaca.innerHTML = "";

  for (data of books) {
    const trForDataBuku = document.createElement("tr");
    const tdForTitle = document.createElement("td");
    tdForTitle.innerText = data.title;
    const tdForAuthor = document.createElement("td");
    tdForAuthor.innerText = data.author;
    const tdForYear = document.createElement("td");
    tdForYear.innerText = data.year;
    if (!data.isCompleted) {
      const tdforTombolSelesai = document.createElement("td");
      const tdforTombolHapus = document.createElement("td");
      const tombolSelesai = document.createElement("button");
      tombolSelesai.innerText = "Buku Selesai Dibaca";
      tombolSelesai.id = data.id;
      // tombolSelesai.addEventListener("click");
      tdforTombolSelesai.append(tombolSelesai);
      const tombolHapus = document.createElement("button");
      tombolHapus.innerText = "Hapus Buku";
      tombolHapus.id = data.id;
      // tombolHapus.addEventListener("click");
      tdforTombolHapus.append(tombolHapus);
      trForDataBuku.append(
        tdForTitle,
        tdForAuthor,
        tdForYear,
        tombolSelesai,
        tombolHapus,
      );
      belumSelesaiBaca.append(trForDataBuku);
    } else {
      const tdForTombolBelumSelesai = document.createElement("td");
      const tdforTombolHapus = document.createElement("td");
      const tombolBelumSelesai = document.createElement("button");
      tombolBelumSelesai.innerText = "Buku Belum Selesai Dibaca";
      tombolBelumSelesai.id = data.id;
      tdForTombolBelumSelesai.append(tombolBelumSelesai);
      tombolBelumSelesai.addEventListener("click", bukuBelumSelesaiDibaca);
      const tombolHapus = document.createElement("button");
      tombolHapus.innerText = "Hapus Buku";
      tombolHapus.id = data.id;
      // tombolHapus.addEventListener("click");
      tdforTombolHapus.append(tombolHapus);
      trForDataBuku.append(
        tdForTitle,
        tdForAuthor,
        tdForYear,
        tombolBelumSelesai,
        tombolHapus,
      );
      SelesaiBaca.append(trForDataBuku);
    }
  }
}

function bukuBelumSelesaiDibaca(event) {
  const idBukuSelesaiDibaca = event.target.id;

  if (idBukuSelesaiDibaca) {
    data.isCompleted = false;
  }

  document.dispatchEvent(new Event("berhasil diubah ke belum baca"));
}

const submitButton = document.getElementById("bookSubmit");
submitButton.addEventListener("click", addBookDatas);
