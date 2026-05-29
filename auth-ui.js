
import {
  auth,
  hasFirebaseConfig,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "./firebase-config.js";

function setMsg(el, message, ok = false) {
  el.textContent = message;
  el.className = "msg show " + (ok ? "ok" : "error");
}

export function setupLogin() {
  const btn = document.getElementById("loginBtn");
  const msg = document.getElementById("msg");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    if (!hasFirebaseConfig()) {
      setMsg(msg, "Firebase ainda não foi configurado. Abra firebase-config.js e troque PASTE_API_KEY.", false);
      return;
    }
    try {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      await signInWithEmailAndPassword(auth, email, password);
      setMsg(msg, "Login realizado. Redirecionando...", true);
      setTimeout(() => location.href = "platform.html", 700);
    } catch (err) {
      setMsg(msg, err.message || "Erro ao entrar.", false);
    }
  });
}

export function setupRegister() {
  const btn = document.getElementById("registerBtn");
  const msg = document.getElementById("msg");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    if (!hasFirebaseConfig()) {
      setMsg(msg, "Firebase ainda não foi configurado. Abra firebase-config.js e troque PASTE_API_KEY.", false);
      return;
    }
    try {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      await createUserWithEmailAndPassword(auth, email, password);
      setMsg(msg, "Conta criada. Redirecionando...", true);
      setTimeout(() => location.href = "platform.html", 700);
    } catch (err) {
      setMsg(msg, err.message || "Erro ao criar conta.", false);
    }
  });
}

export function setupLogoutButton(id = "logoutBtn") {
  const btn = document.getElementById(id);
  if (!btn) return;
  btn.addEventListener("click", async () => {
    if (hasFirebaseConfig()) {
      await signOut(auth);
    }
    location.href = "login.html";
  });
}
