/* ==============================
   Part 2: JavaScript Functions
   ============================== */

// Function demonstrating scope and return
function calculateArea(width, height) {
    const area = width * height; // local scope
    return area;
}

const boxWidth = 50;
const boxHeight = 50;
console.log("Box area:", calculateArea(boxWidth, boxHeight));

// Function to toggle modal visibility
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle("active");
}

// Part 3: JS-triggered animation
const triggerBtn = document.getElementById("triggerBtn");
const box = document.querySelector(".box");

triggerBtn.addEventListener("click", () => {
    // Use JS to temporarily add a class that triggers CSS animation
    box.style.transition = "transform 0.5s ease, background-color 0.5s ease";
    box.style.transform = "translateX(300px) rotate(45deg)";
    box.style.backgroundColor = "#9b59b6";

    // Reset after 1s
    setTimeout(() => {
        box.style.transform = "translateX(0) rotate(0deg)";
        box.style.backgroundColor = "#e74c3c";
    }, 1000);
});

// Modal open/close logic
const modalBtn = document.getElementById("triggerBtn");
const closeModalBtn = document.getElementById("closeModal");

modalBtn.addEventListener("click", () => toggleModal("modal"));
closeModalBtn.addEventListener("click", () => toggleModal("modal"));

