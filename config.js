// Firebase Configuration - Buyzar
const firebaseConfig = {
  apiKey: "AIzaSyC3wPQtwPkZAh-_NJs2f2N-2CJOB0zphFU",
  authDomain: "buyzar-dfa42.firebaseapp.com",
  projectId: "buyzar-dfa42",
  storageBucket: "buyzar-dfa42.firebasestorage.app",
  messagingSenderId: "763955873108",
  appId: "1:763955873108:web:1e7865d82612c4a16634c1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// UPI Phone Number
const UPI_PHONE = "7091342375";
const UPI_QR_URL = "https://chart.googleapis.com/chart?cht=qr&chl=upi://pay?pa=7091342375@ybl&pn=Buyzar&am=&cu=INR&chs=300x300";

// Categories
const categories = [
  { id: "groceries", name: "Groceries", image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=300&h=200&fit=crop" },
  { id: "fruits", name: "Fruits", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&h=200&fit=crop" },
  { id: "vegetables", name: "Vegetables", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300&h=200&fit=crop" },
  { id: "medicines", name: "Medicines", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=200&fit=crop" },
  { id: "food", name: "Food", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop" },
  { id: "fashion", name: "Fashion", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=200&fit=crop" }
];