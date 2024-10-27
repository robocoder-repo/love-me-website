
document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const result = document.getElementById('result');

    yesBtn.addEventListener('click', () => {
        result.textContent = 'Love you too! ❤️';
        createHearts(50);
    });

    noBtn.addEventListener('click', () => {
        result.textContent = 'Really?';
        moveButton(noBtn);
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
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 10}s`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 15000);
    }
}
