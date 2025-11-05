export function tampilkanData(tbody, dataList) {
  tbody.innerHTML = "";
  dataList.forEach((data, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${data.nama}</td>
      <td>${data.nim}</td>
      <td>${data.matkul}</td>
      <td>${data.nilai}</td>
    `;
    tbody.appendChild(tr);
  });
}