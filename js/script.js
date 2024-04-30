let icon = document.querySelector(".icons");
let list = document.querySelector(".list");
let remove = document.querySelector("#fli");
const c=document.getElementById("overlay");
icon.addEventListener("click", () => {
    list.classList.toggle("show");
    c.classList.toggle("show")
    icon.style.display = "none";
});

remove.addEventListener("click", () => {
    list.classList.remove("show");
    c.classList.remove("show")
    icon.style.display = "block";
});
window.addEventListener('scroll', function() {
    const header = document.getElementById('myHeader');
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
function downloadCV() {
    var cvPath = "../cv.pdf";
    var link = document.createElement("a");
    link.href = cvPath;
    link.download = "../cv.pdf";
    link.click();
  }