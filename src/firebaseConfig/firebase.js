import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoD3A8wn_Oyy3nAxgNVTceZ1XTdljPpAw",
  authDomain: "peliculastmdbapi.firebaseapp.com",
  projectId: "peliculastmdbapi",
  storageBucket: "peliculastmdbapi.appspot.com",
  messagingSenderId: "822225698864",
  appId: "1:822225698864:web:6f88a7ac957d3a10382df5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
