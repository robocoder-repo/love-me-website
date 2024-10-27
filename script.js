
document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const result = document.getElementById('result');

    yesBtn.addEventListener('click', () => {
        result.textContent = 'Love you too! ❤️';
        createHearts(50);
        createCartoon('🐱', 10);
    });

    noBtn.addEventListener('click', () => {
        result.textContent = 'Really?';
        moveButton(noBtn);
        createCartoon('🐶', 5);
    });

    createHearts(20);
});

function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    button.style.position = 'fixed';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

function createHearts(count) {
    createFloatingElements('❤️', count, 'heart');
}

function createCartoon(emoji, count) {
    createFloatingElements(emoji, count, 'cartoon');
}

function createFloatingElements(content, count, className) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.classList.add(className);
        element.textContent = content;
        element.style.left = `${Math.random() * 100}vw`;
        element.style.top = `${Math.random() * 100}vh`;
        element.style.animationDuration = `${Math.random() * 5 + 10}s`;
        document.body.appendChild(element);
        setTimeout(() => element.remove(), 15000);
    }
}
