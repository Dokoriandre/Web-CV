const photoProfil = document.getElementById("photoprofil");
const header = document.querySelector("header");

header.addEventListener("mousemove", (event) => {
    const centerX = header.clientWidth / 2;
    const centerY = header.clientHeight / 2;

    const rotateX = ((event.clientY - centerY) / centerY) * 20;
    const rotateY = ((event.clientX - centerX) / centerX) * -20;

    photoProfil.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

header.addEventListener("mouseleave", () => {
    photoProfil.style.transform = "rotate(0deg)";
});
