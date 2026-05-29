
import { auth, hasFirebaseConfig, onAuthStateChanged } from "./firebase-config.js";

export function requireAuth() {
  if (!hasFirebaseConfig()) {
    document.body.insertAdjacentHTML("afterbegin", `
      <div style="max-width:980px;margin:20px auto;padding:14px 18px;border-radius:16px;background:#fff3cd;color:#6b5500;font-family:Arial,sans-serif">
        Firebase ainda não foi configurado. Abra <strong>firebase-config.js</strong>, troque <strong>PASTE_API_KEY</strong> pela sua API key real e habilite <strong>Email/Password</strong> no Firebase Authentication.
      </div>
    `);
    return;
  }
  onAuthStateChanged(auth, (user) => {
    if (!user) location.href = "login.html";
  });
}
