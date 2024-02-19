const firstimg = document.querySelector(".active-0");
const secondimg = document.querySelector(".active-1");
const thirdimg = document.querySelector(".active-2");

setActiveclassImg = 3;
imgIndex = 2

setInterval(function () {
    imgIndex = imgIndex + 1;
    if (imgIndex === 1) {
        firstimg.classList.remove("active");
        firstimg.classList.add("hidden");
        secondimg.classList.remove("hidden");
        secondimg.classList.add("active");
        setActiveclassImg =  imgIndex;
    }else if (imgIndex === 2) {
        secondimg.classList.remove("active");
        secondimg.classList.add("hidden");
        thirdimg.classList.remove("hidden");
        thirdimg.classList.add("active");
        setActiveclassImg =  imgIndex;
    } else {
        thirdimg.classList.remove("active");
        thirdimg.classList.add("hidden");
        firstimg.classList.remove("hidden");
        firstimg.classList.add("active");
        setActiveclassImg =  imgIndex;
        imgIndex = 0;
    }
    
}, 4000);

const prayerRequest = document.getElementById("request");
const visit = document.getElementById("visit");
const requestForm = document.getElementById("form");
const visitForm = document.getElementById("form-visit");
const overlay = document.getElementById("overlay");


prayerRequest.addEventListener("click", function () {
    requestForm.classList.remove("hidden");
    requestForm.classList.add("visible");
    overlay.style.display = "block";
});

visit.addEventListener("click", function () {
    visitForm.classList.remove("hidden");
    visitForm.classList.add("visible");
    overlay.style.display = "block";
});

overlay.addEventListener("click", function () {
    requestForm.classList.remove("visible");
    requestForm.classList.add("hidden");
    visitForm.classList.remove("visible");
    visitForm.classList.add("hidden");
    overlay.style.display = "none";

})
