const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

const botonLanding = document.getElementById("plan-landing");
botonLanding.addEventListener("click", () => {
  modalCentro.classList.add("active");
});

const modalCentro = document.querySelector("#modal-centro");
const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");

cerrarModalCentro.addEventListener("click", () => {
  modalCentro.classList.remove("active");
});
