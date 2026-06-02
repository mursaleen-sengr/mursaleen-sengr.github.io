// ========== EMBEDDED DATA ==========
// Data is embedded directly to avoid fetch issues on GitHub Pages

const DATA = {
    about: {"summary":{"title":"Professional Summary","text":"AI & ML Engineer with 2+ years of experience building production-grade LLM applications, RAG systems, and agent workflows. Delivered FastAPI-based AI platforms serving healthcare, finance, and Islamic knowledge domains using LangGraph, Qdrant, AWS, and Docker. Experienced in fine-tuning, retrieval optimization, and scalable AI backend development."},"info":[{"icon":"fas fa-map-marker-alt","text":"Islamabad, Pakistan"},{"icon":"fas fa-phone","text":"+92 307 770 6100"},{"icon":"fas fa-envelope","text":"mursaleen.sengr@gmail.com"}],"stats":[{"value":"2+","label":"Years Experience"},{"value":"10+","label":"Projects Completed"},{"value":"99.9%","label":"Uptime Achieved"}]},
    
    experience: {"experiences":[{"date":"March 2025 – Present","title":"AI/ML Engineer","company":"DiveDeepAI","location":"Islamabad, Pakistan","responsibilities":["Engineered Generative AI solutions, developing both custom and LangGraph driven RAG pipelines, and fine-tuning LLMs.","Architected robust FastAPI backends; managed deployments on AWS EC2 and DigitalOcean.","Led a 3-person team to deliver sprint goals, managing system architecture and mentored junior developers."]},{"date":"August 2024 – February 2025","title":"Jr AI Engineer","company":"Softoo","location":"Islamabad, Pakistan","responsibilities":["Collaborated with the Solution Architect to rapidly prototype and iterate Generative AI Proof-of-Concepts (POCs).","Built scalable RAG-based applications utilizing LangChain, LangGraph, LLMs, and vector databases."]}]},
    
    projects: {"projects":[{"icon":"fas fa-clinic-medical","title":"Bridge Vet: Veterinary Clinic Platform","description":["Managed a development team to deliver an end-to-end clinic management system; built a scalable FastAPI, Redis, and Celery backend for asynchronous AI SOAP note generation, medication extraction, and appointment follow-ups.","Developed a custom RAG-based clinical assistant for dosage calculations, evaluated retrieval accuracy via Langfuse, and implemented OCR pipelines to automate inventory tracking. Maintained continuous deployments on AWS EC2."],"tags":["Python","FastAPI","Redis","Celery","Google Gemini","Vector DBs","Langfuse","OCR","Docker","AWS EC2"],"stats":[{"icon":"fas fa-stethoscope","text":"Clinical SOAP Notes"},{"icon":"fas fa-shield-alt","text":"Langfuse Evaluated"}]},{"icon":"fas fa-mosque","title":"eQRA-AI: Islamic AI Assistant","description":["Built the backend for an Islamic AI Assistant, deploying dual RAG chatbots (Phase 1) dedicated to precise Fatwa and Duas retrieval. Scaled deployments on DigitalOcean App platform and Redis/Celery over droplets and Grafana Loki for log aggregation.","Developed an agentic MVP (Phase 2) using a LangGraph multi-tool agent to efficiently route user intent between live web queries and vectorized Qdrant databases. Integrated Mem0 for long-term memory and built web scraping pipelines to ingest extensive Islamic literature."],"tags":["Python","FastAPI","LangGraph","Qdrant","Mem0","Redis","Celery","Grafana Loki","AWS","DigitalOcean"],"stats":[{"icon":"fas fa-project-diagram","text":"LangGraph Agents"},{"icon":"fas fa-database","text":"Qdrant & Mem0"}]},{"icon":"fas fa-file-invoice-dollar","title":"Yani: AI Assistant for Chartered Accountants","description":["Built a RAG-based chatbot to assist Chartered Accountants, alongside a distinct document compliance workflow that evaluates text chunks directly against regulatory frameworks to map clauses and flag non-compliance.","Implemented an AI-powered database chat utilizing Vanna.ai trained on complex schemas, achieving 92% accuracy in natural language to SQL conversion.","Developed a multi-agent system using Autogen to perform automated Exploratory Data Analysis (EDA) and dynamically generate visual insights from the extracted SQL data."],"tags":["Python","Vanna.ai","Autogen","RAG","LLMs","Pandas","Matplotlib","Streamlit"],"stats":[{"icon":"fas fa-percentage","text":"92% NL-to-SQL Accuracy"},{"icon":"fas fa-chart-bar","text":"Autogen Multi-Agent EDA"}]},{"icon":"fas fa-microphone-alt","title":"Whisper Fine-Tuning for Quranic Arabic","description":["Optimized a custom fine-tuning pipeline for the Whisper model utilizing 10,000+ Quranic Tarteel audio samples to improve specialized Arabic speech-to-text transcription and phonetic accuracy.","Achieved a 90% improvement in complex Harakat (diacritic) recognition and reduced overall Word Error Rate (WER) by 30–40% compared to foundational baseline models."],"tags":["Python","PyTorch","Hugging Face","Whisper","Audio Processing"],"stats":[{"icon":"fas fa-star","text":"90% Harakat Recognition"},{"icon":"fas fa-chart-line","text":"30-40% WER Reduction"}]}]},
    
    skills: {"categories":[{"name":"Languages","icon":"fas fa-code","skills":[{"name":"Python","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},{"name":"SQL","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"}]},{"name":"AI/ML & Frameworks","icon":"fas fa-brain","skills":[{"name":"PyTorch","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"},{"name":"Hugging Face","logo":"https://huggingface.co/front/assets/huggingface_logo.svg"},{"name":"OpenAI","icon":"fas fa-brain"},{"name":"LangChain","logo":"https://cdn.simpleicons.org/langchain"},{"name":"LangGraph","icon":"fas fa-network-wired"},{"name":"Autogen","icon":"fas fa-robot"},{"name":"RAG","icon":"fas fa-search-plus"},{"name":"Mem0","icon":"fas fa-memory"}]},{"name":"Evaluation & Observability","icon":"fas fa-glasses","skills":[{"name":"Langfuse","icon":"fas fa-binoculars"},{"name":"Grafana Loki","logo":"https://cdn.simpleicons.org/grafana"},{"name":"LLM Benchmarking","icon":"fas fa-tasks"},{"name":"Retrieval Evaluation","icon":"fas fa-poll"},{"name":"Hallucination Reduction","icon":"fas fa-shield-alt"}]},{"name":"Databases","icon":"fas fa-database","skills":[{"name":"PostgreSQL","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},{"name":"Qdrant","logo":"https://cdn.simpleicons.org/qdrant"},{"name":"FAISS","icon":"fas fa-search-plus"},{"name":"PgVector","icon":"fas fa-vector-square"},{"name":"Redis","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"},{"name":"MongoDB","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"}]},{"name":"Backend & Infrastructure","icon":"fas fa-server","skills":[{"name":"FastAPI","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"},{"name":"Celery","logo":"https://cdn.simpleicons.org/celery"},{"name":"AWS (EC2, S3)","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},{"name":"DigitalOcean","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg"},{"name":"Docker","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"},{"name":"Linux","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"},{"name":"CI/CD","icon":"fas fa-sync-alt"}]},{"name":"Tools","icon":"fas fa-tools","skills":[{"name":"Git","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},{"name":"GitHub","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},{"name":"GitLab","logo":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"},{"name":"Web Scraping","icon":"fas fa-spider"},{"name":"Postman","logo":"https://cdn.simpleicons.org/postman"},{"name":"Claude Code","icon":"fas fa-code-branch"},{"name":"Cursor","icon":"fas fa-mouse-pointer"},{"name":"Antigravity","icon":"fas fa-space-shuttle"}]}]},
    
    education: {"degree":{"title":"Bachelor of Science in Software Engineering","institution":"The Islamia University of Bahawalpur","date":"October 2020 – June 2024","cgpa":"3.70/4.00","coursework":"Relevant Coursework: Databases, Object-Oriented Programming, Software Engineering, Data Structures and Algorithms, Artificial Intelligence, Machine Learning, Cloud Computing, Computer Networks"},"certifications":[{"title":"Intermediate Python","issuer":"DataCamp","year":"2024"},{"title":"Introduction to Large Language Models","issuer":"Google Cloud","year":"2024"}]}
};

// ========== DATA LOADING ==========
async function loadJSON(key) {
    return DATA[key] || null;
}

// ========== ABOUT SECTION RENDERER ==========
async function renderAboutSection() {
    const data = await loadJSON('about');
    if (!data) return;

    const container = document.getElementById('about-content');
    if (!container) return;

    const infoItemsHTML = data.info.map(item => `
        <div class="info-item">
            <i class="${item.icon}"></i>
            <span>${item.text}</span>
        </div>
    `).join('');

    const statsHTML = data.stats.map(stat => `
        <div class="stat-card">
            <h4>${stat.value}</h4>
            <p>${stat.label}</p>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="about-text">
            <h3>${data.summary.title}</h3>
            <p>${data.summary.text}</p>
            <div class="about-info">
                ${infoItemsHTML}
            </div>
        </div>
        <div class="about-stats">
            ${statsHTML}
        </div>
    `;
}

// ========== EXPERIENCE SECTION RENDERER ==========
async function renderExperienceSection() {
    const data = await loadJSON('experience');
    if (!data) return;

    const container = document.getElementById('experience-timeline');
    if (!container) return;

    const timelineHTML = data.experiences.map(exp => {
        const responsibilitiesHTML = exp.responsibilities.map(r => `<li>${r}</li>`).join('');
        return `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${exp.date}</span>
                    <h3>${exp.title}</h3>
                    <h4>${exp.company} | ${exp.location}</h4>
                    <ul>
                        ${responsibilitiesHTML}
                    </ul>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = timelineHTML;
}

// ========== PROJECTS SECTION RENDERER ==========
async function renderProjectsSection() {
    const data = await loadJSON('projects');
    if (!data) return;

    const container = document.getElementById('projects-grid');
    if (!container) return;

    const projectsHTML = data.projects.map(project => {
        const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
        const statsHTML = project.stats.map(stat => 
            `<span><i class="${stat.icon}"></i> ${stat.text}</span>`
        ).join('');

        let descHTML = '';
        if (Array.isArray(project.description)) {
            descHTML = `<ul class="project-bullets">` + 
                project.description.map(bullet => `<li>${bullet}</li>`).join('') + 
                `</ul>`;
        } else {
            descHTML = `<p>${project.description}</p>`;
        }

        return `
            <div class="project-card">
                <div class="project-icon">
                    <i class="${project.icon}"></i>
                </div>
                <h3>${project.title}</h3>
                ${descHTML}
                <div class="project-tags">
                    ${tagsHTML}
                </div>
                <div class="project-stats">
                    ${statsHTML}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = projectsHTML;
}

// ========== SKILLS SECTION RENDERER ==========
async function renderSkillsSection() {
    const data = await loadJSON('skills');
    if (!data) return;

    const container = document.getElementById('skills-container');
    if (!container) return;

    const categoriesHTML = data.categories.map(category => {
        const skillsHTML = category.skills.map(skill => {
            // Check if skill has a logo URL or uses an icon
            const iconHTML = skill.logo 
                ? `<img src="${skill.logo}" alt="${skill.name}">`
                : `<div class="skill-icon-placeholder"><i class="${skill.icon}"></i></div>`;
            
            return `
                <div class="skill-item">
                    ${iconHTML}
                    <span>${skill.name}</span>
                </div>
            `;
        }).join('');

        return `
            <div class="skill-category">
                <div class="category-header">
                    <i class="${category.icon}"></i>
                    <h3>${category.name}</h3>
                </div>
                <div class="skill-grid">
                    ${skillsHTML}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = categoriesHTML;
}

// ========== EDUCATION SECTION RENDERER ==========
async function renderEducationSection() {
    const data = await loadJSON('education');
    if (!data) return;

    const container = document.getElementById('education-content');
    if (!container) return;

    const certificationsHTML = data.certifications.map(cert => `
        <div class="cert-item">
            <i class="fas fa-certificate"></i>
            <div>
                <h4>${cert.title}</h4>
                <p>${cert.issuer}, ${cert.year}</p>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="education-card">
            <div class="education-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>${data.degree.title}</h3>
            <h4>${data.degree.institution}</h4>
            <p class="education-date">${data.degree.date}</p>
            <p class="cgpa">CGPA: ${data.degree.cgpa}</p>
            <p>${data.degree.coursework}</p>
        </div>

        <div class="certificates">
            <h3>Certifications</h3>
            ${certificationsHTML}
        </div>
    `;
}

// ========== INITIALIZE ALL DATA-DRIVEN SECTIONS ==========
async function initializeDataSections() {
    // Load all sections in parallel for better performance
    await Promise.all([
        renderAboutSection(),
        renderExperienceSection(),
        renderProjectsSection(),
        renderSkillsSection(),
        renderEducationSection()
    ]);

    // Re-initialize animations after content is loaded
    initializeAnimations();
}

// ========== ANIMATION INITIALIZATION ==========
function initializeAnimations() {
    // Re-observe elements for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all dynamically created elements
    const elementsToAnimate = document.querySelectorAll(`
        .about-content,
        .timeline-item,
        .project-card,
        .skill-category,
        .education-card,
        .cert-item,
        .contact-content
    `);

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Re-initialize skill items animation
    const skillItems = document.querySelectorAll('.skill-item');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        skillObserver.observe(item);
    });

    // Re-initialize project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });

    // Re-initialize stat counter animation
    const statCards = document.querySelectorAll('.stat-card h4');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statCards.forEach(card => {
                    const targetValue = parseFloat(card.textContent);
                    animateCounter(card, targetValue);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// ========== COUNTER ANIMATION ==========
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const suffix = element.textContent.replace(/[0-9.]/g, '');
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= parseFloat(target)) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = start.toFixed(1) + suffix;
        }
    }, 16);
};

// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Add rotation animation
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== ACTIVE NAVIGATION HIGHLIGHTING ==========
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ========== SMOOTH SCROLL FOR NAVIGATION LINKS ==========
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== TYPING EFFECT FOR HERO SUBTITLE ==========
const subtitleElement = document.querySelector('.hero-subtitle');
const originalText = 'AI & ML Engineer';
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = originalText.substring(0, charIndex);
    subtitleElement.textContent = currentText;

    if (!isDeleting && charIndex < originalText.length) {
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, deletingSpeed);
    } else if (charIndex === originalText.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseTime);
    } else if (charIndex === 0) {
        isDeleting = false;
        setTimeout(typeEffect, 500);
    }
}

// ========== FLOATING CARDS INTERACTIVE EFFECT ==========
const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1) translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) translateY(0)';
    });
});

// ========== PARALLAX EFFECT FOR HERO SECTION ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - scrolled / 700;
    }
});

// ========== CONTACT FORM HANDLING ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create mailto link
        const mailtoLink = `mailto:mursaleen.sengr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Message prepared! Your email client will open.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 20px 30px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== MINI CARDS STAGGERED ANIMATION ==========
const miniCards = document.querySelectorAll('.mini-card');
miniCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px) scale(0.9)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
    }, 800 + index * 100);
});

// ========== PAGE LOAD ANIMATION ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Start typing effect
    setTimeout(typeEffect, 1000);
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px) scale(1.1)';
    scrollTopBtn.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.6)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0) scale(1)';
    scrollTopBtn.style.boxShadow = '0 5px 20px rgba(99, 102, 241, 0.4)';
});

// ========== CONSOLE EASTER EGG ==========
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cLooking for a talented AI/ML Engineer? Let\'s connect!', 'font-size: 14px; color: #8b5cf6;');
console.log('%cEmail: mursaleen.sengr@gmail.com', 'font-size: 12px; color: #94a3b8;');

// ========== INITIALIZE ON DOM READY ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeDataSections();
});
