const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const blob1 = document.querySelector("#blob1");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});
/****modal landing */
const botonLanding = document.getElementById("plan-landing");
botonLanding.addEventListener("click", () => {
  modalCentro.classList.add("active");
});

const modalCentro = document.querySelector("#modal-landing");
const cerrarModalCentro = document.querySelector("#cerrar-modal-landing");

cerrarModalCentro.addEventListener("click", () => {
  modalCentro.classList.remove("active");
});

/******modal sitio */
const botonSitio = document.getElementById("plan-sitio");
botonSitio.addEventListener("click", () => {
  modalCentro1.classList.add("active");
});

const modalCentro1 = document.querySelector("#modal-sitio");
const cerrarModalCentro1 = document.querySelector("#cerrar-modal-sitio");

cerrarModalCentro1.addEventListener("click", () => {
  modalCentro1.classList.remove("active");
});

/*****modal ecommerce */
const botonEcommerce = document.getElementById("plan-ecommerce");
botonEcommerce.addEventListener("click", () => {
  modalCentro2.classList.add("active");
});

const modalCentro2 = document.querySelector("#modal-ecommerce");
const cerrarModalCentro2 = document.querySelector("#cerrar-modal-ecommerce");

cerrarModalCentro2.addEventListener("click", () => {
  modalCentro2.classList.remove("active");
});
/********** blob1 ******************/
