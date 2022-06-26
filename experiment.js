const formElement = document.getElementById("inputBook");
const submitButton = document.getElementById("bookSubmit");

function formHandling(event) {
  event.preventDefault();
}

function submitFormData() {
  const judul = document.getElementById("inputBookTitle").value;
  const penulis = document.getElementById("inputBookAuthor").value;
  const tahun = document.getElementById("inputBookYear").value;
  const kotakCentang = document.getElementById("inputBookIsComplete");
  if (kotakCentang.checked === false) {
    const belumSelesai = document.getElementById("belumSelesaiBaca");
    const nampungId = document.createElement("p");
    const nampungJudul = document.createElement("h3");
    const nampungPenulis = document.createElement("p");
    const nampungTahun = document.createElement("p");
    nampungId.textContent = +new Date();
    nampungJudul.textContent = judul;
    nampungPenulis.textContent = penulis;
    nampungTahun.textContent = tahun;
    // console.log(
    //   nampungId,
    //   nampungJudul,
    //   nampungPenulis,
    //   nampungTahun,
    //   "belum selesai",
    // );
    belumSelesai.append(nampungId, nampungJudul, nampungPenulis, nampungTahun);
  } else {
    const selesai = document.getElementById("SelesaiBaca");
    const nampungId = document.createElement("p");
    const nampungJudul = document.createElement("h3");
    const nampungPenulis = document.createElement("p");
    const nampungTahun = document.createElement("p");
    nampungId.textContent = +new Date();
    nampungJudul.textContent = judul;
    nampungPenulis.textContent = penulis;
    nampungTahun.textContent = tahun;
    // console.log(
    //   nampungId,
    //   nampungJudul,
    //   nampungPenulis,
    //   nampungTahun,
    //   "selesai",
    // );
    selesai.append(nampungId, nampungJudul, nampungPenulis, nampungTahun);
  }
}
formElement.addEventListener("submit", formHandling);
submitButton.addEventListener("click", submitFormData);
