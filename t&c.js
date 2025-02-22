function changeLanguage() {
    let selectedLanguage = document.getElementById("language-selector").value;

    const translations = {
        "en": {
            "about": "ABOUT HACKERZGUIDE",
            "quickLinks": "QUICK LINKS",
            "customerSupport": "CUSTOMER SUPPORT",
            "followUs": "FOLLOW US",
            "newsletter": "NEWSLETTER",
            "subscribe": "Subscribe to get the latest updates and exclusive content."
        },
        "fr": {
            "about": "À PROPOS DE HACKERZGUIDE",
            "quickLinks": "LIENS RAPIDES",
            "customerSupport": "SUPPORT CLIENT",
            "followUs": "SUIVEZ-NOUS",
            "newsletter": "BULLETIN",
            "subscribe": "Abonnez-vous pour recevoir les dernières mises à jour et du contenu exclusif."
        },
        "es": {
            "about": "SOBRE HACKERZGUIDE",
            "quickLinks": "ENLACES RÁPIDOS",
            "customerSupport": "SOPORTE AL CLIENTE",
            "followUs": "SÍGUENOS",
            "newsletter": "BOLETÍN",
            "subscribe": "Suscríbete para recibir las últimas actualizaciones y contenido exclusivo."
        },
        "de": {
            "about": "ÜBER HACKERZGUIDE",
            "quickLinks": "SCHNELLE LINKS",
            "customerSupport": "KUNDENUNTERSTÜTZUNG",
            "followUs": "FOLGEN SIE UNS",
            "newsletter": "NEWSLETTER",
            "subscribe": "Abonnieren Sie, um die neuesten Updates und exklusiven Inhalte zu erhalten."
        }
    };

    document.getElementById("about-hackerzguide").textContent = translations[selectedLanguage].about;
    document.getElementById("quick-links-title").textContent = translations[selectedLanguage].quickLinks;
    document.getElementById("customer-support-title").textContent = translations[selectedLanguage].customerSupport;
    document.getElementById("follow-us-title").textContent = translations[selectedLanguage].followUs;
    document.getElementById("newsletter-title").textContent = translations[selectedLanguage].newsletter;
    document.getElementById("subscribe-text").textContent = translations[selectedLanguage].subscribe;

    alert(`Language changed to: ${selectedLanguage}`);
}

function subscribeNewsletter() {
    let email = document.getElementById("newsletter-email").value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        alert("Please enter a valid email.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email format. Please enter a correct email.");
        return;
    }

    alert(`Thank you for subscribing, ${email}!`);
}

window.onscroll = function () {
    let backToTop = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}