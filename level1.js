const rock1 = document.getElementById("rock1");
const rock2 = document.getElementById("rock2");
const rock3 = document.getElementById("rock3");
const rock4 = document.getElementById("rock4");
const rock5 = document.getElementById("rock5");
const key = document.getElementById("key");


rock1.style.position = "absolute";
rock1.style.left = "500px";
rock1.style.top = "300px";
rock1.style.width = "10%"; // Réduisez la largeur selon vos préférences
rock1.style.height = "10%"; // Réduisez la hauteur selon vos préférences

rock2.style.position = "absolute";
rock2.style.left = "500px";
rock2.style.top = "600px";
rock2.style.width = "10%"; // Réduisez la largeur selon vos préférences
rock2.style.height = "10%"; // Réduisez la hauteur selon vos préférences

rock3.style.position = "absolute";
rock3.style.left = "1200px";
rock3.style.top = "600px";
rock3.style.width = "10%"; // Réduisez la largeur selon vos préférences
rock3.style.height = "10%"; // Réduisez la hauteur selon vos préférences

rock4.style.position = "absolute";
rock4.style.left = "1200px";
rock4.style.top = "400px";
rock4.style.width = "10%"; // Réduisez la largeur selon vos préférences
rock4.style.height = "10%"; // Réduisez la hauteur selon vos préférences

rock5.style.position = "absolute";
rock5.style.left = "1000px";
rock5.style.top = "700px";
rock5.style.width = "10%"; // Réduisez la largeur selon vos préférences
rock5.style.height = "10%"; // Réduisez la hauteur selon vos préférences

key.style.position = "absolute";
key.style.left = "1250px";
key.style.top = "450px";
key.style.width = "3%"; // Réduisez la largeur selon vos préférences
key.style.height = "3%"; // Réduisez la hauteur selon vos préférences



let isDragging1 = false;
let offset1 = { x: 0, y: 0 };
let isDragging2 = false;
let offset2 = { x: 0, y: 0 };
let isDragging3 = false;
let offset3 = { x: 0, y: 0 };
let isDragging4 = false;
let offset4 = { x: 0, y: 0 };
let isDragging5 = false;
let offset5 = { x: 0, y: 0 };
let isDragging6 =false;
let offset6 = { x: 0, y: 0 };


rock1.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isDragging1 = true;
        offset1.x = e.clientX - parseFloat(rock1.style.left);
        offset1.y = e.clientY - parseFloat(rock1.style.top);
    }
});

rock2.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isDragging2 = true;
        offset2.x = e.clientX - parseFloat(rock2.style.left);
        offset2.y = e.clientY - parseFloat(rock2.style.top);
    }
});

rock3.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isDragging3 = true;
        offset3.x = e.clientX - parseFloat(rock3.style.left);
        offset3.y = e.clientY - parseFloat(rock3.style.top);
    }
});

rock4.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isDragging4 = true;
        offset4.x = e.clientX - parseFloat(rock4.style.left);
        offset4.y = e.clientY - parseFloat(rock4.style.top);
    }
});

rock5.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isDragging5 = true;
        offset5.x = e.clientX - parseFloat(rock5.style.left);
        offset5.y = e.clientY - parseFloat(rock5.style.top);
    }
});

key.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isDragging6 = true;
        offset6.x = e.clientX - parseFloat(key.style.left);
        offset6.y = e.clientY - parseFloat(key.style.top);
    }
});


document.addEventListener("mousemove", (e) => {
    if (isDragging1) {
        rock1.style.left = e.clientX - offset1.x + "px";
        rock1.style.top = e.clientY - offset1.y + "px";
    }
    if (isDragging2) {
        rock2.style.left = e.clientX - offset2.x + "px";
        rock2.style.top = e.clientY - offset2.y + "px";
    }
    if (isDragging3) {
        rock3.style.left = e.clientX - offset3.x + "px";
        rock3.style.top = e.clientY - offset3.y + "px";
    }
    if (isDragging4) {
        rock4.style.left = e.clientX - offset4.x + "px";
        rock4.style.top = e.clientY - offset4.y + "px";
    }
    if (isDragging5) {
        rock5.style.left = e.clientX - offset5.x + "px";
        rock5.style.top = e.clientY - offset5.y + "px";
    }
    if (isDragging6) {
        key.style.left = e.clientX - offset6.x + "px";
        key.style.top = e.clientY - offset6.y + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging1 = false;
    isDragging2 = false;
    isDragging3 = false;
    isDragging4 = false;
    isDragging5 = false;
    isDragging6 = false;
});