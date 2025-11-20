document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Efeito aprimorado de scroll na navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            navbar.style.backgroundColor = 'rgba(255, 252, 249, 0.98)';
            navbar.style.padding = '0.8rem 5%'; // Fica um pouco mais compacta ao rolar
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.backgroundColor = 'transparent'; // Transparente no topo
            navbar.style.padding = '1.5rem 5%';
        }
    });

    // Intersection Observer para animações de entrada mais fluidas
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Seleciona elementos para animar
    const elementsToAnimate = document.querySelectorAll('.diferencial-card, .servico-card, .foto-item, .depoimento-card, h2, p');
    
    elementsToAnimate.forEach((el, index) => {
        // Define estado inicial
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        // Adiciona delay escalonado se estiverem no mesmo grupo
        // (Isso é uma simplificação visual, o ideal seria agrupar por pai)
        el.style.transitionDelay = `${(index % 3) * 0.1}s`; 
        observer.observe(el);
    });
});