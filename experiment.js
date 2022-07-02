// const formElement = document.getElementById("inputBook");
// const submitButton = document.getElementById("bookSubmit");
// const belumSelesai = document.getElementById("belumSelesaiBaca");
// const selesai = document.getElementById("SelesaiBaca");
// const nampungKeSelesai = "";

// const pushKeSelesai = [];

// const dataBuku = {
//   id: "",
//   title: "",
//   author: "",
//   year: "",
//   isComplete: "",
// };

// function formHandling(event) {
//   event.preventDefault();
// }

// function submitFormData() {
//   const judul = document.getElementById("inputBookTitle").value;
//   const penulis = document.getElementById("inputBookAuthor").value;
//   const tahun = document.getElementById("inputBookYear").value;
//   const kotakCentang = document.getElementById("inputBookIsComplete").checked;
//   dataBuku.id = +new Date();
//   dataBuku.title = judul;
//   dataBuku.author = penulis;
//   dataBuku.year = tahun;
//   dataBuku.isComplete = kotakCentang;

//   if (kotakCentang === false) {
//     const nampungId = document.createElement("p");
//     const nampungJudul = document.createElement("h3");
//     const nampungPenulis = document.createElement("p");
//     const nampungTahun = document.createElement("p");
//     const nampungHeadingId = document.createElement("h3");
//     const nampungHeadingJudul = document.createElement("h3");
//     const nampungHeadingPenulis = document.createElement("h3");
//     const nampungHeadingTahun = document.createElement("h3");
//     const nampungsemuaHeading = document.createElement("div");
//     const nampungSemuaDataBuku = document.createElement("div");
//     nampungId.textContent = dataBuku.id;
//     nampungJudul.textContent = dataBuku.title;
//     nampungPenulis.textContent = dataBuku.author;
//     nampungTahun.textContent = dataBuku.year;
//     nampungHeadingId.textContent = "Id Buku";
//     nampungHeadingJudul.textContent = "Judul Buku";
//     nampungHeadingPenulis.textContent = "Penulis Buku";
//     nampungHeadingTahun.textContent = "Tahun Terbit";
//     nampungId.classList.add("data");
//     nampungJudul.classList.add("data");
//     nampungPenulis.classList.add("data");
//     nampungTahun.classList.add("data");
//     nampungHeadingId.classList.add("heading");
//     nampungHeadingJudul.classList.add("heading");
//     nampungHeadingPenulis.classList.add("heading");
//     nampungHeadingTahun.classList.add("heading");
//     nampungsemuaHeading.append(
//       nampungHeadingId,
//       nampungHeadingJudul,
//       nampungHeadingPenulis,
//       nampungHeadingTahun,
//     );
//     nampungSemuaDataBuku.append(
//       nampungId,
//       nampungJudul,
//       nampungPenulis,
//       nampungTahun,
//     );
//     belumSelesai.append(nampungsemuaHeading, nampungSemuaDataBuku);
//   } else {
//     const nampungId = document.createElement("p");
//     const nampungJudul = document.createElement("h3");
//     const nampungPenulis = document.createElement("p");
//     const nampungTahun = document.createElement("p");
//     nampungId.textContent = dataBuku.id;
//     nampungJudul.textContent = dataBuku.title;
//     nampungPenulis.textContent = dataBuku.author;
//     nampungTahun.textContent = dataBuku.year;
//     selesai.append(nampungId, nampungJudul, nampungPenulis, nampungTahun);
//   }
// }
// formElement.addEventListener("submit", formHandling);
// submitButton.addEventListener("click", submitFormData);
