window.onload = function () {
    document.getElementById("bgload").style.height = "0%";
    document.getElementById("bgload").style.transitionDelay = "1.7s";
    document.getElementById("load-content").style.opacity= "0";
    document.getElementById("load-content").style.visibility= "hidden";
    document.getElementById("load-content").style.transition= "1s";
    document.getElementById("load-content").style.transitionDelay= "1.7s";
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