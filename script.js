// ==================== PROJECTS DATA ====================
// 📌 TO ADD MORE PROJECTS IN THE FUTURE:
// Simply add a new object to this array following the same structure.
// The project will automatically appear on your website!

const projects = [
    {
        title: "Game of Thrones Analysis",
        description: "Comprehensive Python analysis exploring character networks, death patterns, and storyline trends using advanced data visualization and statistical techniques.",
        image: "assets/images/got-project.jpg", // 📌 Replace with your project image
        techStack: ["Python", "Pandas", "Matplotlib", "Jupyter"],
        githubLink: "https://github.com/SahilSatale/Game-of-Thrones-Python-Project-Analysis",
        liveLink: "" // Leave empty if no live demo
    },
    {
        title: "Laptop Market Analysis",
        description: "In-depth analysis of laptop specifications and pricing trends, identifying key factors affecting prices and providing actionable market insights.",
        image: "assets/images/laptop-project.jpg", // 📌 Replace with your project image
        techStack: ["Python", "Data Analysis", "Visualization", "NumPy"],
        githubLink: "https://github.com/SahilSatale/Data-Analysis-on-Laptop-Dataset",
        liveLink: ""
    },
    {
        title: "Electric Vehicle Population Analysis",
        description: "Analysis of EV adoption patterns, geographical distribution, and market trends to understand the electric vehicle landscape and predict future growth.",
        image: "assets/images/ev-project.jpg", // 📌 Replace with your project image
        techStack: ["Python", "Seaborn", "Data Science", "Pandas"],
        githubLink: "https://github.com/SahilSatale/Electric-Vehicle-Population-Data-Analysis-",
        liveLink: ""
    },
    {
        title: "HR Analytics Dashboard",
        description: "Employee attrition analysis and workforce insights using statistical methods to help organizations improve retention strategies.",
        image: "assets/images/hr-project.jpg", // 📌 Replace with your project image
        techStack: ["Python", "HR Analytics", "Statistics", "Matplotlib"],
        githubLink: "https://github.com/SahilSatale/Hr-analytics",
        liveLink: ""
    },
    {
        title: "Sales Forecasting Model",
        description: "Predictive analytics model for sales forecasting using historical data and machine learning algorithms to optimize inventory management.",
        image: "assets/images/sales-project.jpg", // 📌 Replace with your project image
        techStack: ["Python", "Scikit-learn", "Time Series", "Pandas"],
        githubLink: "https://github.com/SahilSatale",
        liveLink: ""
    },
    {
        title: "Customer Segmentation Analysis",
        description: "Clustering analysis to segment customers based on purchasing behavior, demographics, and preferences for targeted marketing strategies.",
        image: "assets/images/customer-project.jpg", // 📌 Replace with your project image
        techStack: ["Python", "K-Means", "PCA", "Visualization"],
        githubLink: "https://github.com/SahilSatale",
        liveLink: ""
    }
];

// ==================== MOBILE NAVIGATION ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for shadow
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide navbar on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ==================== ACTIVE NAVIGATION LINK ====================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== LOAD PROJECTS DYNAMICALLY ====================
const projectsGrid = document.getElementById('projectsGrid');

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" onerror="this.src='assets/images/placeholder.jpg'">
        </div>
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="tech-stack">
                ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.githubLink}" target="_blank" class="project-link github">
                    <i class="fab fa-github"></i> GitHub
                </a>
                ${project.liveLink ? `
                    <a href="${project.liveLink}" target="_blank" class="project-link live">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Load all projects
function loadProjects() {
    projectsGrid.innerHTML = '';
    projects.forEach((project, index) => {
        projectsGrid.appendChild(createProjectCard(project, index));
    });
}

// Initialize projects on page load
loadProjects();

// ==================== CONTACT FORM VALIDATION ====================
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Validation functions
function validateName(name) {
    if (name.trim().length < 2) {
        return 'Name must be at least 2 characters long';
    }
    return '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }
    return '';
}

function validateMessage(message) {
    if (message.trim().length < 10) {
        return 'Message must be at least 10 characters long';
    }
    return '';
}

function showError(inputId, errorMessage) {
    const errorElement = document.getElementById(`${inputId}Error`);
    errorElement.textContent = errorMessage;
    document.getElementById(inputId).style.borderColor = '#ef4444';
}

function clearError(inputId) {
    const errorElement = document.getElementById(`${inputId}Error`);
    errorElement.textContent = '';
    document.getElementById(inputId).style.borderColor = '#e5e7eb';
}

// Real-time validation
nameInput.addEventListener('blur', () => {
    const error = validateName(nameInput.value);
    if (error) {
        showError('name', error);
    } else {
        clearError('name');
    }
});

emailInput.addEventListener('blur', () => {
    const error = validateEmail(emailInput.value);
    if (error) {
        showError('email', error);
    } else {
        clearError('email');
    }
});

messageInput.addEventListener('blur', () => {
    const error = validateMessage(messageInput.value);
    if (error) {
        showError('message', error);
    } else {
        clearError('message');
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields
    const nameError = validateName(nameInput.value);
    const emailError = validateEmail(emailInput.value);
    const messageError = validateMessage(messageInput.value);
    
    // Show errors if any
    if (nameError) showError('name', nameError);
    if (emailError) showError('email', emailError);
    if (messageError) showError('message', messageError);
    
    // If no errors, submit form
    if (!nameError && !emailError && !messageError) {
        // Clear errors
        clearError('name');
        clearError('email');
        clearError('message');
        
        // Show success message
        const successMessage = document.getElementById('formSuccess');
        successMessage.style.display = 'flex';
        
        // Log form data (in production, send to backend)
        console.log('Form submitted:', {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        });
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
});

// ==================== BACK TO TOP BUTTON ====================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .resume-highlights li, .skill-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==================== TYPING EFFECT (Optional Enhancement) ====================
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing effect after page loads
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// ==================== LAZY LOADING FOR IMAGES ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img');
    images.forEach(img => imageObserver.observe(img));
}

// ==================== PREVENT DEFAULT IMAGE ERROR ====================
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // If image fails to load, show a placeholder
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%239ca3af"%3EImage Not Found%3C/text%3E%3C/svg%3E';
        });
    });
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Welcome to my portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'color: #8b5cf6; font-size: 14px;');
console.log('%c💼 Interested in working together? Let\'s connect!', 'color: #ec4899; font-size: 14px;');

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events for better performance
window.addEventListener('scroll', debounce(() => {
    // Additional scroll-based functionality can be added here
}, 100));

// ==================== ACCESSIBILITY ENHANCEMENTS ====================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ==================== ANALYTICS PLACEHOLDER ====================
// 📌 Add your Google Analytics or other tracking code here
// Example:
// gtag('config', 'GA_MEASUREMENT_ID');

console.log('Portfolio website loaded successfully! ✨');
