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
const auth = firebase.auth();
const db = firebase.firestore();

function login() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, pass)
    .then(userCred => {
      const uid = userCred.user.uid;
      return db.collection("users").doc(uid).get();
    })
    .then(doc => {
      if (doc.exists) {
        const role = doc.data().role;
        if (role === "admin") {
          window.location.href = "admin.html";
        } else {
          window.location.href = "member.html";
        }
      } else {
        document.getElementById('error').textContent = "No role found for user.";
      }
    })
    .catch(err => {
      document.getElementById('error').textContent = err.message;
    });
}