import { db, collection, addDoc, getDocs, query, orderBy } from "./firebaseConfig.js";

const collectionRef = collection(db, "nilai_mahasiswa");

export async function tambahData(data) {
  await addDoc(collectionRef, data);
}

export async function ambilSemuaData() {
  const q = query(collectionRef, orderBy("nim", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
}