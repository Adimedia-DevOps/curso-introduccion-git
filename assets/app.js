const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const participantes = Array.isArray(window.PARTICIPANTES)
  ? window.PARTICIPANTES
  : [];

document.querySelector("#estado").textContent =
  window.ESTADO_SESION || "Sin estado";

document.querySelector("#lema").textContent =
  window.LEMA_EQUIPO || "Sin lema";

document.querySelector("#completados").textContent =
  participantes.filter((persona) => !persona.nombre.startsWith("Plaza ")).length;

document.querySelector("#people").innerHTML = participantes
  .map((persona) => [
    '<article class="person">',
    '<span class="avatar ' + escapeHtml(persona.color) + '">' + escapeHtml(persona.iniciales) + '</span>',
    "<div>",
    "<h3>" + escapeHtml(persona.nombre) + "</h3>",
    "<p><span>Afición:</span> " + escapeHtml(persona.aficion) + "</p>",
    "</div>",
    '<small>#' + String(persona.id).padStart(2, "0") + "</small>",
    "</article>"
  ].join(""))
  .join("");