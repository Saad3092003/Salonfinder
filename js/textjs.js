window.onload = function () {
    document.getElementById("bgload").style.display = "none";
};
function add(sid) {
    let orgcol = document.getElementById(sid);
    let newcol = orgcol.cloneNode(true);
    let toadd = document.getElementById('rw');
    newcol.className = "col-sm-6 col-12 col-md-5 col-lg-6 col-xl-10 mx-1"
    toadd.appendChild(newcol);
}
// Get the element to animate
var element = document.querySelector('.animate-me');

// Define the keyframes for the animation
var keyframes = [
  { transform: 'translateX(0)' },
  { transform: 'translateX(100%)' }
];

// Create a variable to store the current scroll position
var scrollPos = 0;

// Create a function to update the animation based on the scroll position
function updateAnimation() {
  // Get the current scroll position
  var newScrollPos = window.pageYOffset;

  // Calculate the scroll distance
  var scrollDistance = newScrollPos + scrollPos;

  // Update the scroll position for the next animation frame
  scrollPos = newScrollPos;

  // Update the keyframes based on the scroll distance
  keyframes[1].transform = 'rotateX(' + (100 + scrollDistance) + 'deg)';

  // Apply the updated keyframes to the element
  element.animate(keyframes, {
    duration: 0,
    fill: 'forwards'
  });

  // Request the next animation frame
//   window.requestAnimationFrame(updateAnimation);
}

// Start the animation loop
// window.requestAnimationFrame(updateAnimation);

function nexttodatetime() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
}
function backtoservices() {
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
}
function nexttoaddnote() {
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "block";
}
function backtodatetime() {
    document.getElementById("div2").style.display = "block";
    document.getElementById("div3").style.display = "none";
}
function sdate(date) {
    let bdate = document.getElementById("date");
    bdate.innerHTML = date.innerHTML;
}
function stime(time) {
    let btime = document.getElementById("time");
    btime.innerHTML = time.innerHTML;
}