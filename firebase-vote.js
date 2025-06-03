
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getFirestore, doc, setDoc, updateDoc, increment, getDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeLIFvNV83O2PSmffxuBV9TKjeMgW3OzU",
  authDomain: "city-linked-vote.firebaseapp.com",
  projectId: "city-linked-vote",
  storageBucket: "city-linked-vote.appspot.com",
  messagingSenderId: "208182574750",
  appId: "1:208182574750:web:ef3f9c6e15cfade286458f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function castVote(userId, city) {
  const cityRef = doc(db, "City_Database", city);
  const userRef = doc(db, "User_Votes", userId);
  const timestamp = new Date();

  const userData = {
    votedThisWeek: true,
    voteCity: city,
    voteTime: timestamp,
  };

  const citySnap = await getDoc(cityRef);
  if (!citySnap.exists()) {
    await setDoc(cityRef, { votes: 1 });
  } else {
    await updateDoc(cityRef, { votes: increment(1) });
  }

  await setDoc(userRef, userData);
}
