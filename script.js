// Tạo hiệu ứng lấp lánh (star)
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    document.body.appendChild(star);
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    const size = Math.random() * 5 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    const duration = Math.random() * 2 + 1;
    star.style.animationDuration = `${duration}s`;
    star.addEventListener('animationend', () => {
        star.remove();
    });
}
setInterval(createStar, 200);

// Thêm CSS cho hiệu ứng star
const style = document.createElement('style');
style.innerHTML = `
.star {
    position: absolute;
    background-color: #ffffff;
    border-radius: 50%;
    opacity: 0;
    animation: starFall linear infinite;
    z-index: -1;
}

@keyframes starFall {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateY(200vh) scale(0.5);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

// Tạo hiệu ứng hạt phát sáng (particle)
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    const duration = Math.random() * 5 + 3;
    particle.style.animationDuration = `${duration}s`;
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}
setInterval(createParticle, 100);

// Thêm CSS cho hiệu ứng particle
const particleStyle = document.createElement('style');
particleStyle.innerHTML = `
.particle {
    position: absolute;
    background-color: #00ffff;
    border-radius: 50%;
    box-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;
    opacity: 0;
    animation: particleGlow linear infinite;
    z-index: -1;
}

@keyframes particleGlow {
    0% {
        transform: translateY(0) scale(0.5);
        opacity: 0;
    }
    50% {
        opacity: 0.7;
    }
    100% {
        transform: translateY(150vh) scale(1);
        opacity: 0;
    }
}
`;
document.head.appendChild(particleStyle);

// Logic cho nút nhạc
const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');

musicButton.addEventListener('click', () => {
    // Luôn phát lại từ đầu khi nhấn nút
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
    musicButton.textContent = 'REPLAY'; // Đổi chữ thành REPLAY
});

// Thêm hiệu ứng pháo hoa neon mới
function createFireworks() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    document.body.appendChild(firework);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;

    setTimeout(() => {
        firework.remove();
    }, 2000); // Xóa pháo hoa sau 2 giây
}

// Bắn pháo hoa mỗi 1-2 giây
setInterval(() => {
    if (Math.random() > 0.5) {
        createFireworks();
    }
}, 1500);

// Thêm CSS cho hiệu ứng pháo hoa
const fireworkStyle = document.createElement('style');
fireworkStyle.innerHTML = `
.firework {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: transparent;
    border-radius: 50%;
    z-index: -1;
    animation: fireworkBurst 1s ease-out forwards;
}

.firework::before, .firework::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid transparent;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
}

.firework::before {
    border-color: #00ffff;
    animation: fireworkExpand 1s ease-out forwards;
}

.firework::after {
    border-color: #ff33cc;
    animation: fireworkExpand 1s ease-out forwards 0.2s;
}

@keyframes fireworkBurst {
    0% { transform: scale(0.5); opacity: 0; }
    50% { transform: scale(1.5); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
}

@keyframes fireworkExpand {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
}
`;
document.head.appendChild(fireworkStyle);