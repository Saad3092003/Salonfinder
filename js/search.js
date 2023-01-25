window.onload = function () {
  document.getElementById("bgload").style.height = "0%";
  document.getElementById("bgload").style.transitionDelay = "2s";
  document.getElementById("load-content").style.opacity= "0";
  document.getElementById("load-content").style.visibility= "hidden";
  document.getElementById("load-content").style.transition= "1s";
  document.getElementById("load-content").style.transitionDelay= "2s";
};
function load(){
const text = document.getElementById("text");
const letters = text.textContent.split("");
text.textContent = "";
letters.forEach((letter,i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.1}s`;
    text.append(span);
});}
load();
setInterval(load, 2300);
function hgridshow() {
  let srow = document.querySelectorAll(".srow");
  let scard = document.querySelectorAll(".scard");
  let sinrow = document.querySelectorAll(".sinrow");
  let sincard = document.querySelectorAll(".sincard");
  let simgblock = document.querySelectorAll(".simgblock");
  let simg = document.querySelectorAll(".simg");
  let scol = document.querySelectorAll(".scol");
  let sfooter = document.querySelectorAll(".sfooter");

  srow.forEach(function(srow){
    srow.className = "t srow row p-2 g-3"
  });
  scard.forEach(function(scard){
    scard.className = "t scard col-12 shadowall rounded-4 px-3 py-4 px-md-4 py-sm-0"
  });
  sinrow.forEach(function(sinrow){
    sinrow.className = "t sinrow row align-items-center"
  });
  sincard.forEach(function(sincard){
    sincard.className = "t sincard d-block d-sm-flex align-items-center"
  });
  simgblock.forEach(function(simgblock){
    simgblock.className = "t simgblock col-sm-5 col-xl-3 col-md-4 d-flex d-sm-block justify-content-center"
  });
  simg.forEach(function(simg){
    simg.className = "t simg logoh rounded img-resp"
  });
  scol.forEach(function(scol){
    scol.className = "t scol col-sm-7 col-xl-9 col-md-8  p-3"
  });
  sfooter.forEach(function(sfooter){
    sfooter.className = "t sfooter d-none"
  });
}
vgridshow();
function vgridshow() {
  let srow = document.querySelectorAll(".srow");
  let scard = document.querySelectorAll(".scard");
  let sinrow = document.querySelectorAll(".sinrow");
  let sincard = document.querySelectorAll(".sincard");
  let simgblock = document.querySelectorAll(".simgblock");
  let simg = document.querySelectorAll(".simg");
  let scol = document.querySelectorAll(".scol");
  let sfooter = document.querySelectorAll(".sfooter");

  srow.forEach(function(srow){
    srow.className = "t srow row g-3 justify-content-center justify-content-md-start"
  });
  scard.forEach(function(scard){
    scard.className = "t scard col-lg-6 col-xl-4 col-md-6 col-sm-8"
  });
  sinrow.forEach(function(sinrow){
    sinrow.className = "t sinrow"
  });
  sincard.forEach(function(sincard){
    sincard.className = "t sincard card h-100"
  });
  simgblock.forEach(function(simgblock){
    simgblock.className = "t simgblock"
  });
  simg.forEach(function(simg){
    simg.className = "t simg card-img-top cardimg"
  });
  scol.forEach(function(scol){
    scol.className = "t scol card-body"
  });
  sfooter.forEach(function(sfooter){
    sfooter.className = "t sfooter card-footer d-block"
  });
}
