// Enhanced cursor effect
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    
    // Add slight delay to outline for smooth effect
    setTimeout(() => {
        cursorOutline.style.left = e.clientX - 12.5 + 'px';
        cursorOutline.style.top = e.clientY - 12.5 + 'px';
    }, 50);
});

// Improved typing effect
const texts = [
    'Inventor',
    'Software Engineer',
    'Pilot',
    'Entrepreneur'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const current = texts[textIndex];
    const typingElement = document.querySelector('.typing');
    
    if (isDeleting) {
        typingElement.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        typingSpeed = 50;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 100;
    }

    setTimeout(type, typingSpeed);
}

// Start typing effect
document.addEventListener('DOMContentLoaded', () => {
    type();
    initializeHeroAnimation();
    initializeAnimations();

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const personalProjects = document.querySelector('.personal-projects');
    const enterpriseProjects = document.querySelector('.enterprise-projects');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show/hide appropriate projects
            if (button.dataset.filter === 'personal') {
                personalProjects.classList.remove('hidden');
                enterpriseProjects.classList.add('hidden');
            } else {
                personalProjects.classList.add('hidden');
                enterpriseProjects.classList.remove('hidden');
            }
        });
    });
});

// Add more animations and interactions as needed 

// Add this to your script.js
function showProjects(type) {
    // Hide all project sections
    document.querySelectorAll('.project-section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected section
    document.getElementById(`${type}-projects`).classList.remove('hidden');
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-gradient-to-r', 'from-primary', 'to-secondary', 'text-white');
        if(btn.dataset.type === type) {
            btn.classList.add('active', 'bg-gradient-to-r', 'from-primary', 'to-secondary', 'text-white');
        }
    });
}

// Initialize tabs
document.addEventListener('DOMContentLoaded', () => {
    showProjects('personal');
});

// Create floating elements dynamically
function createFloatingElements() {
    const floatingContainer = document.querySelector('.floating-elements');
    const icons = [
        'plane', 'laptop-code', 'microchip', 'shield-alt', 
        'code', 'terminal', 'cloud', 'lock', 'database', 'cogs'
    ];
    
    setInterval(() => {
        const icon = document.createElement('i');
        icon.className = `fas fa-${icons[Math.floor(Math.random() * icons.length)]}`;
        icon.style.left = Math.random() * 100 + '%';
        icon.style.top = Math.random() * 100 + '%';
        icon.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        icon.style.opacity = '0';
        
        floatingContainer.appendChild(icon);
        
        setTimeout(() => {
            icon.style.opacity = '0.1';
            icon.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`;
        }, 100);
        
        setTimeout(() => {
            floatingContainer.removeChild(icon);
        }, 10000);
    }, 1000);
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createFloatingElements();
    
    // Add scroll reveal animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('hidden-section');
        observer.observe(section);
    });
});

// Add this function to your existing script.js
function initializeHeroAnimation() {
    const floatingContainer = document.querySelector('.floating-elements');
    if (!floatingContainer) return;

    // Clear existing elements
    floatingContainer.innerHTML = '';

    // Create initial set of icons
    const icons = [
        'plane', 'laptop-code', 'microchip', 'shield-alt', 
        'code', 'terminal', 'cloud', 'lock', 'database', 'cogs'
    ];

    // Create and position initial icons
    icons.forEach((icon, index) => {
        const element = document.createElement('i');
        element.className = `fas fa-${icon} absolute text-white/5`;
        element.style.fontSize = `${Math.random() * 1 + 1.5}rem`;
        element.style.transition = 'all 3s ease-in-out';
        
        // Set initial position
        updateIconPosition(element);
        
        floatingContainer.appendChild(element);

        // Start animation loop for this element
        animateIcon(element);
    });
}

function updateIconPosition(element) {
    element.style.left = `${Math.random() * 100}%`;
    element.style.top = `${Math.random() * 100}%`;
}

function animateIcon(element) {
    setInterval(() => {
        element.style.transform = `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(${Math.random() * 360}deg)`;
        element.style.opacity = (Math.random() * 0.3 + 0.1).toString();
    }, 3000);
}

// Add this to your script.js
document.addEventListener('DOMContentLoaded', function() {
    // Particle animation configuration
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": ["circle", "triangle", "edge"],
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.2,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.3
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
});