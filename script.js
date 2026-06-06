const pics = [
    "foto 1.jpeg",
    "foto 2.jpeg",
    "foto 3.jpeg"
];

let pos = 0;
const view = document.getElementById("viewer");

function nextImage() {
    view.classList.remove("visible");

    setTimeout(() => {
        pos = (pos + 1) % pics.length;
        view.src = pics[pos];
    }, 300);

    setTimeout(() => {
        view.classList.add("visible");
    }, 350);
}

window.onload = () => {
    view.classList.add("visible");
    setInterval(nextImage, 3200);
};
