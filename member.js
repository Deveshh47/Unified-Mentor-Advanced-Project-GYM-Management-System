const firebaseConfig = {
  apiKey: "AIzaSyCJWhuiSBRt2mTE5Yny8SXtBCCeo0l475k",
  authDomain: "gym-management-system-46cfc.firebaseapp.com",
  projectId: "gym-management-system-46cfc",
  storageBucket: "gym-management-system-46cfc.appspot.com",
  messagingSenderId: "226363671104",
  appId: "1:226363671104:web:f5e13e57ec23a3b969d5a5",
  measurementId: "G-DFQ0QGTH6J"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function loadData() {
  const id = document.getElementById("memberId").value;
  if (!id) return alert("Enter Member ID");

  db.collection("bills").where("memberId", "==", id).get().then(snap => {
    const billBody = document.getElementById("bills-body");
    billBody.innerHTML = "";
    snap.forEach(doc => {
      const d = doc.data();
      billBody.innerHTML += `<tr><td>₹${d.amount}</td><td>${new Date(d.date.toDate()).toLocaleDateString()}</td></tr>`;
    });
  });

  db.collection("notifications").where("memberId", "==", id).get().then(snap => {
    const noteBody = document.getElementById("notes-body");
    noteBody.innerHTML = "";
    snap.forEach(doc => {
      const d = doc.data();
      noteBody.innerHTML += `<tr><td>${d.message}</td><td>${new Date(d.date.toDate()).toLocaleDateString()}</td></tr>`;
    });
  });
}