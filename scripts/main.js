// Particle.js configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#4f46e5'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#818cf8',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Add hover effects to cards
document.querySelectorAll('.glass').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(255, 255, 255, 0.15),
                rgba(255, 255, 255, 0.1) 40%
            )
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            })
        });

        if (response.ok) {
            alert('Message sent successfully!');
            e.target.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        alert('Failed to send message. Please try again later.');
    } finally {
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
    }
});

// Project hover effects
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href !== '#') {
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
