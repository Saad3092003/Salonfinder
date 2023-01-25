// var video = document.getElementById("myVideo");
// video.onplay = function() {
//   document.getElementById("bgload").style.display = "none";
// };

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

const m_fade = document.querySelector('#mfade');
const mb_fade = document.querySelector('.manime');
const img_1 = document.querySelector('#img1');
const img_2 = document.querySelector('#img2');
const img_3 = document.querySelector('#img3');
const mobilesection = document.querySelector('#my-mobilesection');
const popularsection = document.querySelector('#my-popularsection');
const faqsection = document.querySelector('#my-faqsection');
const fsection = document.querySelector('#my-footersection');
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');
const card5 = document.querySelector('#card5');

function mfade(){
  let scrollPosition = window.scrollY;
  let mobilesectionTop = mobilesection.offsetTop-400;
  let end = mobilesection.offsetTop+300;
  if(scrollPosition>=mobilesectionTop && scrollPosition<=end){
    m_fade.style.opacity = '1';
    m_fade.style.transition = '2s';
    m_fade.style.transform = "translateX(-20px)"
    mb_fade.style.transition = '1s';
    mb_fade.style.opacity = "1";
    mb_fade.style.width ="100%";
  }
  else{
    m_fade.style.transform = "translateX(50px)"
    m_fade.style.opacity='0';
    m_fade.style.transition = '2s';
    mb_fade.style.transition = '1s';
    mb_fade.style.opacity = "0";
    mb_fade.style.width ="15%";
  }
}
function img1_lg(){
  let scrollPosition = window.scrollY;
  let mobilesectionTop = mobilesection.offsetTop-200;
  let end = mobilesection.offsetTop+200;
  if (scrollPosition >= mobilesectionTop && scrollPosition <= end ) 
  {
    img_1.style.transition = "0.4s";
    img_1.style.transform = `translateY(${scrollPosition - mobilesectionTop }px)`;
  }
}
function img1_sm(){
  let scrollPosition = window.scrollY;
  let mobilesectionTop = mobilesection.offsetTop-200;
  let end = mobilesection.offsetTop-50;
  if (scrollPosition >= mobilesectionTop && scrollPosition <= end )
   {
    img_1.style.transition = "0.4s";
    img_1.style.transform = `translateY(${scrollPosition - mobilesectionTop }px)`;
  }
}
function img2_lg(){
    let scrollPosition = window.scrollY;    
    let mobilesectionTop = mobilesection.offsetTop-200;
    let end = mobilesection.offsetTop+100;
    if (scrollPosition >= mobilesectionTop && scrollPosition<=end )
    {
        img_2.style.transition = '0.4s';
        img_2.style.transform = `translateY(${scrollPosition - mobilesectionTop}px)`;
    }
}
function img2_sm(){
    let scrollPosition = window.scrollY;    
    let mobilesectionTop = mobilesection.offsetTop-200;
    let end = mobilesection.offsetTop-50;
    if(scrollPosition>=mobilesectionTop && scrollPosition<=end)
    {
        img_2.style.transition = "0.4s";
        img_2.style.transform = `translateY(${scrollPosition - mobilesectionTop}px)`;
    }
}
function img3_lg(){
  let scrollPosition = window.scrollY;
  let mobilesectionTop = mobilesection.offsetTop-200;
  let end = mobilesection.offsetTop;

  if(scrollPosition>=mobilesectionTop && scrollPosition<=end){
      img_3.style.transition = "0.4s";
      img_3.style.transform = `translateY(-${scrollPosition - mobilesectionTop}px)`;
  }
}
function img3_sm(){
  let scrollPosition = window.scrollY;
  let mobilesectionTop = mobilesection.offsetTop-200;
  let end = mobilesection.offsetTop-50;

  if(scrollPosition>=mobilesectionTop && scrollPosition<=end){
      img_3.style.transition = "0.4s";
      img_3.style.transform = `translateY(-${scrollPosition - mobilesectionTop}px)`;
  }
}
function msfade(){
  let scrollPosition = window.scrollY;
  let mobilesectionTop = mobilesection.offsetTop-500;
  if (scrollPosition >= mobilesectionTop ) 
  {
    mobilesection.style.opacity = "1";
    mobilesection.style.transition = '0.5s';
  }
}
function psfade(){
  let scrollPosition = window.scrollY;
  let popularsectionTop = popularsection.offsetTop-500;
  if(scrollPosition >= popularsectionTop){
    popularsection.style.opacity = '1';
    // popularsection.style.transform = 'translateY(0px)';
    card1.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
    card2.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
    card3.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
    card4.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
    card5.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
  }
}
function faqsfade(){
  let scrollPosition = window.scrollY;
  let faqsectionTop = faqsection.offsetTop-500;
  if(scrollPosition >= faqsectionTop){
    faqsection.style.opacity = '1';
    faqsection.style.transform = 'translateY(0px)';
  }
  else{
    faqsection.style.opacity = "0";
    faqsection.style.transform = 'translateY(50px)';
  }
  
}
function fsfade(){
  let scrollPosition = window.scrollY;
  let fsectionTop = fsection.offsetTop-500;
  if(scrollPosition >= fsectionTop){
    fsection.style.opacity = '1';
    fsection.style.transform = 'translateY(0px)';
  }
  else{
    fsection.style.opacity = "0";
    fsection.style.transform = 'translateY(50px)';
  }
}
function navcolor(){
  let head = document.querySelector('#nav1');
  let start = document.querySelector('#my-popularsectionn');
  if(window.scrollY>=start.offsetTop-50){
    head.classList.add('themecolor');
  }
  else{
    head.classList.remove('themecolor');
  }
}
  window.addEventListener('scroll', psfade);
  window.addEventListener('scroll', msfade);
  window.addEventListener('scroll', faqsfade);
  window.addEventListener('scroll', fsfade);
  window.addEventListener('scroll', navcolor);

if(document.body.offsetWidth>=992)
  {
    window.addEventListener('scroll', img1_lg);
    window.addEventListener('scroll', img2_lg);
    window.addEventListener('scroll', mfade);
    window.addEventListener('scroll', img3_lg);
  }
  else
  {
    window.removeEventListener('scroll', img1_lg);
    window.removeEventListener('scroll', img2_lg);
    window.removeEventListener('scroll', img3_lg);
    window.addEventListener('scroll', img1_sm);
    window.addEventListener('scroll', img2_sm);
    window.addEventListener('scroll', img3_sm);
  }

// setInterval(functionname, 1000 milliseconds)