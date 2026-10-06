import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import {
  doc,
  getDoc,
  getFirestore,
  runTransaction,
  serverTimestamp,
  setDoc,
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCvWRGKOWXkt6obBDd3RWrIG4JZnuq4l8",
  authDomain: "hapod1.firebaseapp.com",
  projectId: "hapod1",
  storageBucket: "hapod1.firebasestorage.app",
  messagingSenderId: "963561139790",
  appId: "1:963561139790:web:beb329bd03713381cd1d1f",
  measurementId: "G-48Z2YQ1HGG",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();

function emit(name, detail = {}) {
  window.dispatchEvent(new CustomEvent(name, { detail }));
}

function publicUser(user) {
  return {
    uid: user.uid,
    displayName: user.displayName || "",
    email: user.email || "",
  };
}

function statsFromSnapshot(snapshot) {
  if (!snapshot.exists()) return null;
  const data = snapshot.data();
  return {
    completed: Number.isSafeInteger(data.completed) && data.completed >= 0 ? data.completed : 0,
    streak: Number.isSafeInteger(data.streak) && data.streak >= 0 ? data.streak : 0,
    lastCompletedDate: typeof data.lastCompletedDate === "string" ? data.lastCompletedDate : null,
  };
}

function statsRef(user) {
  return doc(db, "users", user.uid);
}

function previousDate(dateKey) {
  const date = new Date(`${dateKey}T12:00:00`);
  date.setDate(date.getDate() - 1);
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    emit("hapod:auth-state", { user: null });
    return;
  }

  const profile = publicUser(user);
  emit("hapod:auth-state", { user: profile });
  try {
    const snapshot = await getDoc(statsRef(user));
    emit("hapod:account-ready", { user: profile, stats: statsFromSnapshot(snapshot) });
  } catch {
    emit("hapod:firebase-error");
  }
});

window.addEventListener("hapod:sign-in", async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch {
    emit("hapod:firebase-error");
  }
});

window.addEventListener("hapod:sign-out", async () => {
  try {
    await signOut(auth);
  } catch {
    emit("hapod:firebase-error");
  }
});

window.addEventListener("hapod:initialize-account", async (event) => {
  const user = auth.currentUser;
  if (!user) return;
  const stats = event.detail.stats;
  try {
    await setDoc(statsRef(user), {
      completed: stats.completed,
      streak: stats.streak,
      lastCompletedDate: stats.lastCompletedDate,
      updatedAt: serverTimestamp(),
    });
    emit("hapod:remote-stats", { stats });
  } catch {
    emit("hapod:firebase-error");
  }
});

window.addEventListener("hapod:complete-day", async (event) => {
  const user = auth.currentUser;
  if (!user) return;
  const { date } = event.detail;
  try {
    const stats = await runTransaction(db, async (transaction) => {
      const ref = statsRef(user);
      const snapshot = await transaction.get(ref);
      const current = statsFromSnapshot(snapshot) || { completed: 0, streak: 0, lastCompletedDate: null };
      if (current.lastCompletedDate === date) return current;
      const next = {
        completed: current.completed + 1,
        streak: current.lastCompletedDate === previousDate(date) ? current.streak + 1 : 1,
        lastCompletedDate: date,
      };
      transaction.set(ref, { ...next, updatedAt: serverTimestamp() }, { merge: true });
      return next;
    });
    emit("hapod:remote-stats", { stats });
  } catch {
    emit("hapod:firebase-error");
  }
});
