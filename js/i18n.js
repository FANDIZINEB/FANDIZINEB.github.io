/* ===================================================================
   Portfolio – Zineb FANDI
   Internationalisation (FR / EN) + bascule de langue
   =================================================================== */

const translations = {
  fr: {
    "nav-about": "Profil", "nav-exp": "Expériences", "nav-proj": "Projets",
    "nav-pub": "Publications", "nav-cert": "Certifications", "nav-cv": "CV", "nav-contact": "Contact",
    "hero-badge": "Disponible immédiatement",
    "hero-subtitle": "Data Scientist · Machine Learning · XAI · NLP & RAG",
    "hero-desc": "Data Scientist spécialisée en Machine Learning explicable (XAI), NLP, LLM/RAG et systèmes de données temps réel. 1 publication IEEE et 1 article accepté à IEEE CBMS 2026 en première auteure. Speaker Apache Flink Meetup Paris.",
    "btn-cv": "Télécharger CV ↓", "btn-contact": "Me contacter →",
    "stat-pub": "Travaux IEEE · 1 publié, 1 accepté", "stat-proj": "Projets", "stat-cert": "Certification Microsoft", "stat-sp": "Présentation scientifique",
    "sl-about": "À propos", "st-about": "Profil",
    "about-p1": "Data Scientist à orientation recherche, je conçois et évalue des modèles de Machine Learning ainsi que des systèmes intelligents fondés sur le NLP, les LLM et le RAG. Mon parcours combine recherche en IA explicable, expérimentation rigoureuse, ingénierie des données et développement de solutions appliquées.",
    "about-p2": "Mon expérience à l'IRIT m'a permis de travailler sur des séries temporelles multivariées avec Random Forest, XGBoost et SHAP. Ces travaux ont conduit à un article accepté à IEEE CBMS 2026 en première auteure. Je suis également deuxième auteure d'une publication IEEE SITA 2025 consacrée au NLP.",
    "about-p3": "Titulaire d'un Master en Data Science & Big Data et d'un titre RNCP de niveau 7 obtenu avec la mention Très Bien, je recherche un CDI, un poste d'ingénieure de recherche ou une thèse financée en intelligence artificielle.",
    "sl-exp": "Parcours", "st-exp": "Expériences",
    "sl-proj": "Projets", "st-proj": "Réalisations", "sd-proj": "Projets Data Science, Machine Learning et IA illustrant mes compétences techniques.",
    "st-proj-other": "Autres projets sur GitHub", "sd-proj-other": "Projets web & backend illustrant ma polyvalence.",
    "sl-pub": "Recherche", "st-pub": "Publications et communication scientifique",
    "sl-cert": "Certifications", "st-cert": "Certifications & Distinctions", "sd-cert": "Certification professionnelle, formations complémentaires et distinctions.",
    "cert-pro": "Certification professionnelle", "cert-form": "Formations complémentaires", "cert-dist": "Distinctions & communications",
    "sl-cv": "CV", "st-cv": "Télécharger mon CV", "sd-cv": "CV Data Scientist / IA — à jour.",
    "sl-skills": "Compétences", "st-skills": "Stack technique",
    "sl-contact": "Contact", "st-contact": "Travaillons ensemble",
    "sd-contact": "Disponible immédiatement pour un CDI, un poste d'ingénieure de recherche ou une thèse financée · France et international",
    "contact-cta": "Data Scientist à orientation recherche, disponible pour un CDI, un poste d'ingénieure de recherche ou une thèse financée en Machine Learning, IA explicable, NLP ou systèmes RAG.",
    "btn-send": "Envoyer un message →"
  },
  en: {
    "nav-about": "Profile", "nav-exp": "Experience", "nav-proj": "Projects",
    "nav-pub": "Publications", "nav-cert": "Certifications", "nav-cv": "Resume", "nav-contact": "Contact",
    "hero-badge": "Available immediately",
    "hero-subtitle": "Data Scientist · Machine Learning · XAI · NLP & RAG",
    "hero-desc": "Data Scientist specialized in Explainable Machine Learning (XAI), NLP, LLM/RAG and real-time data pipelines. 1 IEEE publication and 1 paper accepted at IEEE CBMS 2026 (first author). Speaker at Apache Flink Meetup Paris.",
    "btn-cv": "Download Resume ↓", "btn-contact": "Contact me →",
    "stat-pub": "IEEE works · 1 published, 1 accepted", "stat-proj": "Projects", "stat-cert": "Microsoft certification", "stat-sp": "Scientific talk",
    "sl-about": "About", "st-about": "Profile",
    "about-p1": "Research-oriented Data Scientist, I design and evaluate Machine Learning models and intelligent systems based on NLP, LLMs and RAG. My background combines Explainable AI research, rigorous experimentation, data engineering and applied solution development.",
    "about-p2": "At IRIT, I worked on multivariate time series with Random Forest, XGBoost and SHAP. This work led to a paper accepted at IEEE CBMS 2026 as first author. I am also second author of an IEEE SITA 2025 publication on NLP.",
    "about-p3": "Holding a Master's in Data Science & Big Data and an RNCP level 7 title obtained with high distinction, I am looking for a permanent role, a research engineer position or a funded PhD in artificial intelligence.",
    "sl-exp": "Path", "st-exp": "Work Experience",
    "sl-proj": "Projects", "st-proj": "Projects", "sd-proj": "Data Science, Machine Learning and AI projects showcasing my technical skills.",
    "st-proj-other": "Other projects on GitHub", "sd-proj-other": "Web & backend projects showing my versatility.",
    "sl-pub": "Research", "st-pub": "Publications & scientific communication",
    "sl-cert": "Certifications", "st-cert": "Certifications & Achievements", "sd-cert": "Professional certification, complementary courses and distinctions.",
    "cert-pro": "Professional certification", "cert-form": "Complementary courses", "cert-dist": "Distinctions & talks",
    "sl-cv": "Resume", "st-cv": "Download my Resume", "sd-cv": "Data Scientist / AI resume — up to date.",
    "sl-skills": "Skills", "st-skills": "Technical Stack",
    "sl-contact": "Contact", "st-contact": "Let's work together",
    "sd-contact": "Available immediately for a full-time role, research engineer position or funded PhD · France & international",
    "contact-cta": "Research-oriented Data Scientist, available for a permanent role, a research engineer position or a funded PhD in Machine Learning, Explainable AI, NLP or RAG systems.",
    "btn-send": "Send a message →"
  }
};

let currentLang = 'fr';

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  const btn = document.getElementById('lang-btn');
  btn.textContent = currentLang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR';
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
}
