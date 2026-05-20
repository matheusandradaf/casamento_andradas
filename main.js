import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  lerp: 0.1, // Controla a suavidade (0 a 1). 0.1 é o padrão, mais responsivo que duration
  wheelMultiplier: 1.2, // Deixa a rolagem do mouse um pouco mais rápida e perceptível
  smoothWheel: true,
});

// Update GSAP ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

// Hook Lenis's requestAnimationFrame to GSAP's ticker
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// --- ANIMATIONS ---

// 1. Text Reveal Animation (Fade & Slide Up)
const revealElements = document.querySelectorAll('.reveal-text');

revealElements.forEach((el) => {
  // Ignora os hero-images para aplicar o efeito especial neles depois
  if(el.classList.contains('hero-img-side') || el.classList.contains('hero-img-main')) return;

  gsap.fromTo(el, 
    { 
      autoAlpha: 0, 
      y: 50 
    },
    {
      duration: 1, 
      autoAlpha: 1, 
      y: 0, 
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
});

// 1.5 Efeito Especial: Imagens do topo somem ao chegar no limite superior
const heroImagesContainers = document.querySelectorAll('.hero-img-side, .hero-img-main');

heroImagesContainers.forEach((el) => {
  gsap.fromTo(el,
    { autoAlpha: 0, y: 100 },
    {
      autoAlpha: 1,
      y: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top -50px', // Só começa a aparecer quando rolar 50px para baixo
        end: 'top -300px', // Termina de aparecer ao rolar 300px
        scrub: true // Scrub faz a animação ir e voltar junto com o scroll (efeito super macio)
      }
    }
  );
});

// 2. Image Parallax Animation
const parallaxImages = document.querySelectorAll('.parallax-img');

parallaxImages.forEach((img) => {
  // O container precisa ter overflow: hidden
  // A imagem precisa ser um pouco maior que o container (ex: height: 120%)
  gsap.to(img, {
    yPercent: 20, // Move a imagem 20% para baixo em relação ao seu container
    ease: 'none',
    scrollTrigger: {
      trigger: img.parentElement, // O trigger é o container
      start: 'top bottom', // Inicia quando o topo do container entra na base da tela
      end: 'bottom top', // Termina quando a base do container sai pelo topo da tela
      scrub: true // Faz a animação acompanhar a rolagem do mouse
    }
  });
});

// 3. Smooth Scroll Navbar Links (opcional)
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Apenas se for um link de âncora interno na mesma página
    const href = this.getAttribute('href');
    if (href.startsWith('#') || href.includes('.html#')) {
      const targetId = href.split('#')[1];
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        lenis.scrollTo(targetElement, { offset: -80 }); // offset do header fixo
      }
    }
  });
});

// 4. Countdown Timer
const countdownElement = document.getElementById('countdown');
if (countdownElement) {
  // Data alvo: 22 de Agosto de 2026 às 16:30 (Horário de Brasília)
  const targetDate = new Date('2026-08-22T16:30:00-03:00').getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdownElement.innerHTML = '<span style="letter-spacing: 0.1em;">CHEGOU O GRANDE DIA!</span>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
  };

  updateCountdown(); // Call immediately
  setInterval(updateCountdown, 1000); // Update every second
}

// --- MENU SANDUÍCHE MOBILE ---
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const bodyElement = document.body;

if (menuToggle && navMenu) {
  const toggleMenu = () => {
    const isActive = menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Evita rolagem da página quando o menu mobile está aberto
    if (isActive) {
      bodyElement.style.overflow = 'hidden';
    } else {
      bodyElement.style.overflow = '';
    }
  };

  menuToggle.addEventListener('click', toggleMenu);

  // Fecha o menu ao clicar em qualquer link de navegação
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      bodyElement.style.overflow = '';
    });
  });
}

