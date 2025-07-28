
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
      apiKey: "AIzaSyAZlwqeVFzVQZf-dmp6Vglcjx9zeKE0Ikc",
      authDomain: "sports-f6789.firebaseapp.com",
      projectId: "sports-f6789",
      storageBucket: "sports-f6789.appspot.com",
      messagingSenderId: "1089375819705",
      appId: "1:1089375819705:web:af7492d1c285e78788c868",
      measurementId: "G-QJE2HPWQ9Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("loginBtn").addEventListener("click", async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        localStorage.setItem("loggedUser", JSON.stringify({
          name: user.displayName,
          email: user.email
        }));
        window.location.href = "index.html";
      } catch (error) {
        alert("Login failed: " + error.message);
        console.error(error);
      }
});
