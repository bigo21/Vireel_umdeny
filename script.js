// Data
const PROJECTS = [
    {
        id: 'mobile-wallet',
        title: 'Mobile Wallet',
        description: 'Solution globale de paiement et d\'inclusion financière permettant d\'envoyer, recevoir et gérer de l\'argent partout dans le monde.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=600',
        calLink: 'https://cal.com/vireel/mobile-wallet'
    },
    {
        id: 'wemonii',
        title: 'Wemonii',
        description: 'Plateforme de crowdfunding et d\'investissement reliant porteurs de projets locaux et investisseurs de la diaspora.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800&h=600',
        calLink: 'https://cal.com/vireel/wemonii'
    },
    {
        id: 'meriaz',
        title: 'Meriaz',
        description: 'Logiciel de gestion d\'entreprise (ERP) tout-en-un pour simplifier la comptabilité, les stocks et les ventes.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
        calLink: 'https://cal.com/vireel/meriaz'
    },
    {
        id: 'cherryz',
        title: 'Cherryz',
        description: 'Solutions de connectivité : WiFi Zone pour le public et Internet B2B dédié pour les entreprises.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800&h=600',
        calLink: 'https://cal.com/vireel/cherryz'
    },
    {
        id: 'badawo',
        title: 'Badawo',
        description: 'Plateforme technologique pour l\'investissement dans les métaux précieux, permettant d\'acheter et de stocker de l\'or digitalement.',
        image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=800&h=600',
        calLink: 'https://cal.com/vireel/badawo'
    }
];

const COWORKING_SPACES = [
    {
        id: 'bureau-partage',
        name: 'Bureau Partagé',
        price: 4000,
        promoPrice: 2000,
        unit: 'jour',
        features: ['Connexion haut débit illimitée', 'Assistante de direction', 'Sécurité et confort', 'Groupe électrogène']
    },
    {
        id: 'bureau-dedie',
        name: 'Bureau Dédié',
        price: 10000,
        promoPrice: 4000,
        unit: 'jour',
        features: ['Connexion haut débit illimitée', 'Assistante de direction', 'Sécurité et confort', 'Groupe électrogène']
    },
    {
        id: 'salle-reunion',
        name: 'Salle de réunion',
        price: 10000,
        promoPrice: 5000,
        unit: 'heure',
        features: ['Connexion haut débit illimitée', 'Assistante de direction', 'Sécurité et confort', 'Groupe électrogène']
    }
];

const QUIZ_QUESTIONS = [
    {
        id: 1,
        question: "Quel est votre objectif principal aujourd'hui ?",
        options: ["Sécuriser mon épargne", "Digitaliser mon entreprise", "Trouver un bureau à Yaoundé", "Financer un projet local"],
        recommendation: "Vireel Ecosystem"
    },
    {
        id: 2,
        question: "De quel type d'espace de travail avez-vous besoin ?",
        options: ["Un bureau partagé (Freelance)", "Un bureau dédié (Équipe)", "Une salle de réunion", "Je travaille à domicile"],
        recommendation: "Coworking Vireel"
    },
    {
        id: 3,
        question: "Quelle solution technologique vous manque ?",
        options: ["Paiement international", "Gestion ERP / Facturation", "WiFi Zone public", "Investissement Or"],
        recommendation: "Mobile Wallet"
    },
    {
        id: 4,
        question: "Comment souhaitez-vous investir ?",
        options: ["Or digital (Badawo)", "Crowdfunding (Wemonii)", "Crypto-actifs", "Immobilier"],
        recommendation: "Badawo"
    },
    {
        id: 5,
        question: "Quel service Vireel vous intéresse le plus ?",
        options: ["Coworking & Bureaux", "Solutions de Paiement", "Logiciels de Gestion", "Investissements"],
        recommendation: "Vireel Services"
    }
];

// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-slate-950/80', 'backdrop-blur-md', 'py-4', 'border-b', 'border-slate-800');
        navbar.classList.remove('bg-transparent', 'py-6');
    } else {
        navbar.classList.remove('bg-slate-950/80', 'backdrop-blur-md', 'py-4', 'border-b', 'border-slate-800');
        navbar.classList.add('bg-transparent', 'py-6');
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Counters Animation
const counters = document.querySelectorAll('.counter');
const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 200;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(animateCounters, 10);
        } else {
            counter.innerText = target;
        }
    });
};

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (entry.target.classList.contains('counter')) {
                // Trigger counter animation only once
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up').forEach(el => observer.observe(el));

// Trigger counters separately when in view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (counters.length > 0) {
    counterObserver.observe(counters[0].parentElement.parentElement);
}

// Render Projects
const projectsGrid = document.getElementById('projects-grid');
const footerProjects = document.getElementById('footer-projects');

PROJECTS.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = `group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-xl reveal-up`;
    card.style.transitionDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <div class="aspect-video overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerpolicy="no-referrer">
        </div>
        <div class="p-8">
            <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">${project.title}</h3>
            <p class="text-slate-400 mb-8 line-clamp-2">${project.description}</p>
            <div class="flex items-center justify-between pt-6 border-t border-slate-800">
                <a href="${project.calLink}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-white font-medium hover:text-blue-500 transition-colors">
                    <i data-lucide="calendar" size="18"></i> Prendre RDV
                </a>
                <button class="p-2 bg-slate-800 rounded-full text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                    <i data-lucide="external-link" size="18"></i>
                </button>
            </div>
        </div>
    `;
    projectsGrid.appendChild(card);
    observer.observe(card);

    // Footer links
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${project.id}" class="text-slate-400 hover:text-blue-500 transition-colors">${project.title}</a>`;
    footerProjects.appendChild(li);
});

// Render Coworking
const coworkingGrid = document.getElementById('coworking-grid');
COWORKING_SPACES.forEach((space, index) => {
    const card = document.createElement('div');
    card.className = `bg-slate-900 p-10 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group reveal-up`;
    card.style.transitionDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <div class="absolute top-4 right-4 promo-badge text-[10px] uppercase tracking-tighter">Super Promo</div>
        <div class="absolute top-14 right-4 text-blue-500 text-[10px] font-bold uppercase">Jusqu'au 30 Mars</div>
        <h3 class="text-2xl font-bold text-white mb-6">${space.name}</h3>
        <div class="mb-8">
            <span class="text-slate-500 line-through text-lg mr-3">${space.price.toLocaleString()} FCFA</span>
            <span class="text-3xl font-bold text-white">${space.promoPrice.toLocaleString()} FCFA</span>
            <span class="text-slate-500 text-sm ml-1">/ ${space.unit}</span>
        </div>
        <ul class="space-y-4 mb-10">
            ${space.features.map(f => `<li class="flex items-center gap-3 text-slate-400"><i data-lucide="check" size="18" class="text-blue-500"></i> ${f}</li>`).join('')}
        </ul>
        <a href="#reservation-form-container" class="block w-full py-4 text-center rounded-2xl font-bold border border-slate-700 text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">Réserver cet espace</a>
    `;
    coworkingGrid.appendChild(card);
    observer.observe(card);
});

// Render RDV Tiles
const rdvGrid = document.getElementById('rdv-grid');
PROJECTS.forEach((project, index) => {
    const tile = document.createElement('a');
    tile.href = project.calLink;
    tile.target = "_blank";
    tile.rel = "noopener noreferrer";
    tile.className = "group relative bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-600 hover:bg-blue-600/5 transition-all duration-300 flex flex-col items-center text-center reveal-up";
    tile.style.transitionDelay = `${index * 0.05}s`;
    tile.innerHTML = `
        <div class="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-blue-500/50 transition-all">
            <i data-lucide="calendar" class="text-blue-500" size="28"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">${project.title}</h3>
        <p class="text-slate-500 text-sm mb-6">Réserver un créneau</p>
        <div class="mt-auto flex items-center gap-2 text-blue-500 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
            Cal.com <i data-lucide="arrow-up-right" size="16"></i>
        </div>
    `;
    rdvGrid.appendChild(tile);
    observer.observe(tile);
});

// Quiz Logic
let currentStep = 0;
let answers = [];
const quizContainer = document.getElementById('quiz-container');

const renderQuiz = () => {
    if (currentStep < QUIZ_QUESTIONS.length) {
        const q = QUIZ_QUESTIONS[currentStep];
        quizContainer.innerHTML = `
            <div class="space-y-10 animate-fade-in">
                <div class="flex items-center justify-between">
                    <span class="text-slate-500 font-medium uppercase tracking-widest text-xs">Question ${currentStep + 1} sur ${QUIZ_QUESTIONS.length}</span>
                    <div class="flex gap-1">
                        ${QUIZ_QUESTIONS.map((_, i) => `<div class="h-1.5 w-8 rounded-full transition-all duration-500 ${i <= currentStep ? 'bg-blue-600' : 'bg-slate-800'}"></div>`).join('')}
                    </div>
                </div>
                <h3 class="text-3xl md:text-4xl font-bold text-white leading-tight">${q.question}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${q.options.map((opt, i) => `
                        <button onclick="handleQuizAnswer('${opt}')" class="group flex items-center justify-between p-6 bg-slate-900 border border-slate-800 rounded-2xl text-left text-lg text-slate-300 hover:border-blue-600 hover:bg-blue-600/5 hover:text-white transition-all duration-300">
                            ${opt} <i data-lucide="arrow-right" size="20" class="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"></i>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        const recommendation = QUIZ_QUESTIONS[answers.length - 1].recommendation;
        quizContainer.innerHTML = `
            <div class="text-center space-y-8 py-10 animate-fade-in">
                <div class="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                    <i data-lucide="sparkles" size="48" class="text-blue-500 animate-pulse"></i>
                    <div class="absolute inset-0 bg-blue-600/10 rounded-full blur-2xl animate-ping"></div>
                </div>
                <h3 class="text-4xl font-bold text-white">Votre recommandation</h3>
                <div class="p-10 bg-slate-900 rounded-3xl border border-blue-500/30 shadow-[0_0_50px_-12px_rgba(37,99,235,0.25)]">
                    <p class="text-slate-400 text-lg mb-2 uppercase tracking-widest font-semibold">Nous vous suggérons :</p>
                    <p class="text-5xl font-black text-white tracking-tight">${recommendation}</p>
                </div>
                <p class="text-slate-400 text-lg max-w-lg mx-auto">Sur la base de vos réponses, ce service semble être le plus adapté à vos besoins actuels dans l'écosystème Vireel.</p>
                <div class="flex flex-col md:flex-row gap-4 justify-center pt-8">
                    <button class="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">En savoir plus</button>
                    <button onclick="resetQuiz()" class="px-10 py-5 bg-slate-800 text-white rounded-2xl font-bold text-lg hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                        <i data-lucide="rotate-ccw" size="20"></i> Recommencer
                    </button>
                </div>
            </div>
        `;
    }
    lucide.createIcons();
};

window.handleQuizAnswer = (option) => {
    answers.push(option);
    currentStep++;
    renderQuiz();
};

window.resetQuiz = () => {
    currentStep = 0;
    answers = [];
    renderQuiz();
};

renderQuiz();

// Form Handling
const reservationForm = document.getElementById('reservation-form');
const successMessage = document.getElementById('success-message');

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = reservationForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<div class="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>`;

    setTimeout(() => {
        reservationForm.classList.add('hidden');
        successMessage.classList.remove('hidden');
        reservationForm.reset();
        
        setTimeout(() => {
            successMessage.classList.add('hidden');
            reservationForm.classList.remove('hidden');
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<i data-lucide="send" size="20"></i> Confirmer la réservation`;
            lucide.createIcons();
        }, 5000);
    }, 1500);
});

// Footer Year
document.getElementById('year').innerText = new Date().getFullYear();

// Re-create icons for dynamic content
lucide.createIcons();
