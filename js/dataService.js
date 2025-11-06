// === FIREBASE CONFIG DAN FIRESTORE ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCeKhEdbvgIhP8L0e3SJiKmXtsWjOyWzVQ",
    authDomain: "aplikasi-input-nilai-mah-f8f4d.firebaseapp.com",
    projectId: "aplikasi-input-nilai-mah-f8f4d",
    storageBucket: "aplikasi-input-nilai-mah-f8f4d.firebasestorage.app",
    messagingSenderId: "1044936586167",
    appId: "1:1044936586167:web:d60bbe432b6d15ac636e32",
    measurementId: "G-MTBWLHP546"
  };

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// === SIMPAN DATA MAHASISWA ===
export async function simpanData(data) {
  // Data sekarang termasuk kode MK
  const docRef = await addDoc(collection(db, "mahasiswa"), {
    nama: data.nama,
    nim: data.nim,
    kode: data.kode, // <--- ditambahkan
    mataKuliah: data.mataKuliah,
    nilai: data.nilai
  });
  console.log("Data disimpan dengan ID:", docRef.id);
}

// === LOAD DATA REALTIME ===
export function loadDataRealtime(callback) {
  const colRef = collection(db, "mahasiswa");
  onSnapshot(colRef, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(data);
  });
}

// === LOAD DATA SEKALI SAJA (untuk refresh) ===
export async function loadDataOnce() {
  const querySnapshot = await getDocs(collection(db, "mahasiswa"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
