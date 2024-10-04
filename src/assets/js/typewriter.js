import Typewriter from "typewriter-effect/dist/core";

document.addEventListener("DOMContentLoaded", () => {
  let element = document.getElementById("typewriter");

  let typewriter = new Typewriter(element, {
    loop: true,
  });

  typewriter
    .typeString("Muhammad")
    .pauseFor(1000)
    .typeString(" Fadhil Al-Fatih")
    .pauseFor(5000)
    .start();
});
