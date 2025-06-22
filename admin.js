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

function addBill() {
  const uid = document.getElementById("billUid").value;
  const amount = parseFloat(document.getElementById("amount").value);
  if (!uid || isNaN(amount)) return alert("Please enter valid details.");
  db.collection("bills").add({ memberId: uid, amount, date: new Date() })
    .then(() => {
      alert("Bill added successfully!");
      document.getElementById("billUid").value = "";
      document.getElementById("amount").value = "";
    }).catch(err => alert("Error: " + err.message));
}

function addNotification() {
  const uid = document.getElementById("notifyUid").value;
  const message = document.getElementById("message").value;
  if (!uid || !message) return alert("Please fill in all fields.");
  db.collection("notifications").add({ memberId: uid, message, date: new Date() })
    .then(() => {
      alert("Notification sent!");
      document.getElementById("notifyUid").value = "";
      document.getElementById("message").value = "";
    }).catch(err => alert("Error: " + err.message));
}