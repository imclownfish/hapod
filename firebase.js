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
    bestStreak: Number.isSafeInteger(data.bestStreak) && data.bestStreak >= 0 ? data.bestStreak : 0,
    bestStreakDate: typeof data.bestStreakDate === "string" ? data.bestStreakDate : null,
  };
}

function normalizeWeightEntries(entries) {
  const byDate = new Map();
  (Array.isArray(entries) ? entries : []).forEach((entry) => {
    const kilograms = Number(entry?.kilograms);
    const date = typeof entry?.date === "string" ? entry.date : "";
    const updatedAt = Number(entry?.updatedAt) || 0;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(kilograms) || kilograms < 20 || kilograms > 500) return;
    const current = byDate.get(date);
    if (!current || updatedAt >= current.updatedAt) {
      byDate.set(date, { date, kilograms: Math.round(kilograms * 10) / 10, updatedAt });
    }
  });
  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date)).slice(-365);
}

function weightEntriesFromSnapshot(snapshot) {
  return snapshot.exists() ? normalizeWeightEntries(snapshot.data().weightEntries) : [];
}

function normalizeFoodEntries(entries) {
  const byId = new Map();
  (Array.isArray(entries) ? entries : []).forEach((entry) => {
    const id = typeof entry?.id === "string" ? entry.id.slice(0, 80) : "";
    const date = typeof entry?.date === "string" ? entry.date : "";
    const name = typeof entry?.name === "string" ? entry.name.trim().slice(0, 48) : "";
    const calories = Number(entry?.calories);
    const protein = Math.max(0, Number(entry?.protein) || 0);
    const carbs = Math.max(0, Number(entry?.carbs) || 0);
    const fat = Math.max(0, Number(entry?.fat) || 0);
    const updatedAt = Number(entry?.updatedAt) || 0;
    if (!id || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !name || !Number.isFinite(calories) || calories < 0 || calories > 10000 || protein > 1000 || carbs > 1000 || fat > 1000) return;
    const current = byId.get(id);
    if (!current || updatedAt >= current.updatedAt) byId.set(id, { id, date, name, calories, protein, carbs, fat, updatedAt });
  });
  return [...byId.values()].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 500);
}

function foodEntriesFromSnapshot(snapshot) {
  return snapshot.exists() ? normalizeFoodEntries(snapshot.data().foodEntries) : [];
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
    emit("hapod:account-ready", {
      user: profile,
      stats: statsFromSnapshot(snapshot),
      weightEntries: weightEntriesFromSnapshot(snapshot),
      foodEntries: foodEntriesFromSnapshot(snapshot),
    });
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
  const weightEntries = normalizeWeightEntries(event.detail.weightEntries);
  const foodEntries = normalizeFoodEntries(event.detail.foodEntries);
  try {
    await setDoc(statsRef(user), {
      completed: stats.completed,
      streak: stats.streak,
      lastCompletedDate: stats.lastCompletedDate,
      bestStreak: stats.bestStreak,
      bestStreakDate: stats.bestStreakDate,
      weightEntries,
      foodEntries,
      updatedAt: serverTimestamp(),
    });
    emit("hapod:remote-stats", { stats });
  } catch {
    emit("hapod:firebase-error");
  }
});

window.addEventListener("hapod:sync-weight-entries", async (event) => {
  const user = auth.currentUser;
  if (!user) return;
  const entries = normalizeWeightEntries(event.detail.entries);
  try {
    await setDoc(statsRef(user), { weightEntries: entries, updatedAt: serverTimestamp() }, { merge: true });
    emit("hapod:remote-weight-entries", { entries });
  } catch {
    emit("hapod:firebase-error");
  }
});

window.addEventListener("hapod:sync-food-entries", async (event) => {
  const user = auth.currentUser;
  if (!user) return;
  const entries = normalizeFoodEntries(event.detail.entries);
  try {
    await setDoc(statsRef(user), { foodEntries: entries, updatedAt: serverTimestamp() }, { merge: true });
    emit("hapod:remote-food-entries", { entries });
  } catch {
    emit("hapod:firebase-error");
  }
});

window.addEventListener("hapod:normalize-stats", async (event) => {
  const user = auth.currentUser;
  if (!user) return;
  const stats = event.detail.stats;
  try {
    await setDoc(
      statsRef(user),
      {
        completed: stats.completed,
        streak: stats.streak,
        lastCompletedDate: stats.lastCompletedDate,
        bestStreak: stats.bestStreak,
        bestStreakDate: stats.bestStreakDate,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch {
    // The local correction remains valid even if an offline sync has to wait.
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
      const current = statsFromSnapshot(snapshot) || {
        completed: 0,
        streak: 0,
        lastCompletedDate: null,
        bestStreak: 0,
        bestStreakDate: null,
      };
      if (current.lastCompletedDate === date) return current;
      const streak = current.lastCompletedDate === previousDate(date) ? current.streak + 1 : 1;
      const previousBest = Math.max(current.bestStreak, current.streak);
      const next = {
        completed: current.completed + 1,
        streak,
        lastCompletedDate: date,
        bestStreak: Math.max(previousBest, streak),
        bestStreakDate: streak > previousBest || !current.bestStreakDate ? date : current.bestStreakDate,
      };
      transaction.set(ref, { ...next, updatedAt: serverTimestamp() }, { merge: true });
      return next;
    });
    emit("hapod:remote-stats", { stats });
  } catch {
    emit("hapod:firebase-error");
  }
});

window.addEventListener("hapod:reconcile-stats", async (event) => {
  const user = auth.currentUser;
  if (!user) return;
  const local = event.detail.stats;
  try {
    const stats = await runTransaction(db, async (transaction) => {
      const ref = statsRef(user);
      const snapshot = await transaction.get(ref);
      const current = statsFromSnapshot(snapshot) || {
        completed: 0,
        streak: 0,
        lastCompletedDate: null,
        bestStreak: 0,
        bestStreakDate: null,
      };
      const localIsNewer = (local.lastCompletedDate || "") > (current.lastCompletedDate || "");
      const currentIsNewer = (current.lastCompletedDate || "") > (local.lastCompletedDate || "");
      const primary = currentIsNewer ? current : local;
      const localHasBest = local.bestStreak > current.bestStreak;
      const next = {
        ...primary,
        completed: Math.max(current.completed, local.completed),
        streak: localIsNewer || (!currentIsNewer && local.streak > current.streak)
          ? local.streak
          : primary.streak,
        bestStreak: Math.max(current.bestStreak, local.bestStreak),
        bestStreakDate: localHasBest
          ? local.bestStreakDate
          : current.bestStreakDate || local.bestStreakDate,
      };
      transaction.set(ref, { ...next, updatedAt: serverTimestamp() }, { merge: true });
      return next;
    });
    emit("hapod:remote-stats", { stats });
  } catch {
    emit("hapod:firebase-error");
  }
});

window.addEventListener("hapod:restart-progress", async () => {
  const user = auth.currentUser;
  if (!user) return;
  const stats = { completed: 0, streak: 0, lastCompletedDate: null, bestStreak: 0, bestStreakDate: null, weightEntries: [], foodEntries: [] };
  try {
    await setDoc(statsRef(user), { ...stats, updatedAt: serverTimestamp() });
    emit("hapod:remote-stats", { stats });
    emit("hapod:remote-weight-entries", { entries: [] });
    emit("hapod:remote-food-entries", { entries: [] });
  } catch {
    emit("hapod:firebase-error");
  }
});
