/* ============================================================
   CONFIGURACIÓN: edita solo este bloque para cambiar tus datos.
   ============================================================ */
const CONFIG = {
  nombre: "Camilo Pereira",
  // El correo se arma con JavaScript para que no quede escrito tal cual en el HTML
  // y sea más difícil para los robots que recolectan correos.
  correoUsuario: "camilo.pereira.lainati",
  correoDominio: "gmail.com",
  linkedin: "https://www.linkedin.com/in/camilopereiralainati/",
  github: "https://github.com/Droflax",
  cv: "cv/CV-Camilo-Pereira.pdf"
};

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Datos de la configuración ---------- */
  document.querySelectorAll("[data-name]").forEach(function (el) { el.textContent = CONFIG.nombre; });
  document.querySelectorAll("[data-linkedin]").forEach(function (el) { el.href = CONFIG.linkedin; });
  document.querySelectorAll("[data-github]").forEach(function (el) { el.href = CONFIG.github; });

  const mail = document.getElementById("mail-link");
  if (mail) {
    const address = CONFIG.correoUsuario + "@" + CONFIG.correoDominio;
    mail.href = "mailto:" + address;
    mail.textContent = address;
  }

  const year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }

  /* ---------- Botón de CV: solo aparece si el archivo existe ---------- */
  const cvLink = document.getElementById("cv-link");
  if (cvLink) {
    cvLink.href = CONFIG.cv;
    if (location.protocol === "file:") {
      // Al abrir el archivo directamente, el navegador bloquea fetch(): se muestra el botón sin comprobar.
      cvLink.hidden = false;
    } else {
      fetch(CONFIG.cv, { method: "HEAD" })
        .then(function (res) { if (res.ok) { cvLink.hidden = false; } })
        .catch(function () { /* sin CV publicado: el botón sigue oculto */ });
    }
  }

  /* ---------- Encabezado tipo terminal: se escribe una sola vez ---------- */
  const terminal = document.getElementById("terminal");
  if (!terminal || prefersReducedMotion) { return; }

  const lines = Array.from(terminal.querySelectorAll(".t-line"));
  const originals = lines.map(function (el) { return el.innerHTML; });
  const plain = lines.map(function (el) { return el.textContent; });

  lines.forEach(function (el) { el.style.visibility = "hidden"; });
  // Evita que el contenedor cambie de alto mientras se escribe.
  terminal.style.minHeight = terminal.offsetHeight + "px";

  const isCommand = function (i) { return !lines[i].classList.contains("t-out"); };

  function typeLine(i) {
    if (i >= lines.length) { return; }
    const el = lines[i];

    // Las líneas de comando se escriben letra por letra; las de salida aparecen completas.
    if (!isCommand(i) || i === lines.length - 1) {
      el.style.visibility = "visible";
      setTimeout(function () { typeLine(i + 1); }, isCommand(i) ? 0 : 220);
      return;
    }

    const promptEl = el.querySelector(".prompt");
    const promptText = promptEl.textContent;
    const command = plain[i].slice(promptText.length).trim();

    el.innerHTML = "";
    el.appendChild(promptEl);
    const typed = document.createTextNode(" ");
    el.appendChild(typed);
    el.style.visibility = "visible";

    let n = 0;
    const timer = setInterval(function () {
      n += 1;
      typed.nodeValue = " " + command.slice(0, n);
      if (n >= command.length) {
        clearInterval(timer);
        el.innerHTML = originals[i];
        setTimeout(function () { typeLine(i + 1); }, 260);
      }
    }, 55);
  }

  typeLine(0);
})();