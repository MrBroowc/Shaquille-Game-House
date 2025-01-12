// Firebase Initialization (moved outside the toggleReadMore function)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0tHVdT2A8s2gJIPxF39WMdOy-vj79IPw",
    authDomain: "shaquilleid.firebaseapp.com",
    projectId: "shaquilleid",
    storageBucket: "shaquilleid.firebasestorage.app",
    messagingSenderId: "390952329770",
    appId: "1:390952329770:web:f3ceb7016374fbf2095953",
    measurementId: "G-HR9RP9X86P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Function to toggle visibility of more text
function toggleReadMore() {
    var moreText = document.getElementById("moreText");
    var readMoreLink = document.getElementById("readMoreLink");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readMoreLink.innerHTML = "Sembunyikan";
    } else {
        moreText.style.display = "none";
        readMoreLink.innerHTML = "Selengkapnya...";
    }
}
