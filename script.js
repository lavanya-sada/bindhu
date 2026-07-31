// Typing Animation
const words = ["Frontend Developer", "Data Science Enthusiast", "Python Learner"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];

    if (isDeleting) {
        document.getElementById("typing").textContent = currentWord.substring(0, j--);
    } else {
        document.getElementById("typing").textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();


// Scroll Animation
const cards = document.querySelectorAll('.card, .project-card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        let position = card.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.5s";
});