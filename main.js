// mengubah warna pada body
const Tombol = document.getElementsByTagName("button")[0];
Tombol.addEventListener("click", function () {
  document.body.classList.toggle("birumuda");
});

// MEMBUAT BUTTON
const tombolbaru = document.createElement("button");
const texttombol = document.createTextNode("ubah warna");
// MENYIMPAN
tombolbaru.appendChild(texttombol);
// TYPE BUTTON NYA APA
tombolbaru.setAttribute("type", "button");
// menyimpan setelah tombol
Tombol.after(tombolbaru);

// Eventlistener
// mengambil dom pada tombol baru
tombolbaru.addEventListener("click", function () {
  // membulatkan angka pada element  variabel
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
// range warna merah
const smerah = document.querySelector("input[name=smerah]");

// range warna hijau
const shijau = document.querySelector("input[name=shijau]");

// range warna biru
const sbiru = document.querySelector("input[name=sbiru]");

smerah.addEventListener("input", function () {
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

shijau.addEventListener("input", function () {
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sbiru.addEventListener("change", function () {
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// mengeser mouse,mengubah pada warna
document.body.addEventListener("mousemove", function (event) {
  const xpos = Math.round((event.clientX / window.innerWidth) * 255);
  const ypos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = "rgb(" + xpos + "," + ypos + ",0)";
});
