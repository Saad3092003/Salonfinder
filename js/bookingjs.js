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
function thumbn(el) {
    document.getElementById('main-img').src = el.src;
}
function ok() {
    let i = 0;
    const carousel = document.querySelector('.custom-carousel');
    items = carousel.querySelectorAll('.custom-carousel-item');
    setInterval(function () {
        if (i >= items.length) {
            i = 0;
        }
        else {
            i++;
        }
        document.getElementById('main-img').src = items[i].src;
    }, 3000);

}
ok();

function nexttodatetime(){
    document.getElementById("service").style.display = "none";
    document.getElementById("datetime").style.display = "block";
}
function backtoservices(){
    document.getElementById("service").style.display = "block";
    document.getElementById("datetime").style.display = "none";
}
function nexttostylist(){
    document.getElementById("datetime").style.display = "none";
    document.getElementById("stylist").style.display = "block";
}
function backtodatetime(){
    document.getElementById("datetime").style.display = "block";
    document.getElementById("stylist").style.display = "none";
}
function nexttoaddnote(){
    document.getElementById("stylist").style.display = "none";
    document.getElementById("addnote").style.display = "block";
}
function backtostylist(){
    document.getElementById("stylist").style.display = "block";
    document.getElementById("addnote").style.display = "none";
}
function sdate(date){
    let bdate = document.getElementById("date");
    bdate.innerHTML = date.innerHTML;
}
function stime(time){
    let btime = document.getElementById("time");
    btime.innerHTML = time.innerHTML;
}
