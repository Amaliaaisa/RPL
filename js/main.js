import { tambahData, ambilSemuaData } from "./dataService.js";
import { validasiInput } from "./validation.js";
import { tampilkanData } from "./uiHandler.js";

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("formInput");
  const tabelBody = document.querySelector("#tabelData tbody");

  // Jika halaman form
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const nama = document.getElementById("nama").value.trim();
      const nim = document.getElementById("nim").value.trim();
      const matkul = document.getElementById("matkul").value;
      const nilai = parseFloat(document.getElementById("nilai").value);

      if (!validasiInput(nama, nim, matkul, nilai)) {
        alert("Input tidak valid. Pastikan semua kolom terisi dan nilai antara 0-100.");
        return;
      }

      await tambahData({ nama, nim, matkul, nilai });
      alert("Data berhasil disimpan!");
      form.reset();
    });
  }

  // Jika halaman tabel
  if (tabelBody) {
    const dataList = await ambilSemuaData();
    tampilkanData(tabelBody, dataList);
  }
});