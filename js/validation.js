export function validasiInput(nama, nim, matkul, nilai) {
  if (!nama || !nim || !matkul || !nilai) return false;
  if (isNaN(nilai) || nilai < 0 || nilai > 100) return false;
  return true;
}