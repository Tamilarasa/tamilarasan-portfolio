const navToggle = document.getElementById('navToggle');
const navmenu = document.getElementById('navmenu');
const menuIcon = document.getElementById('menuIcon');
const links = document.querySelectorAll('.navmenu a');
const scrollTop = document.getElementById('scrollTop');
const cursorGlow = document.querySelector('.cursor-glow');

navToggle.addEventListener('click', () => {
  navmenu.classList.toggle('active');
  menuIcon.classList.toggle('bi-list');
  menuIcon.classList.toggle('bi-x');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
    navmenu.classList.remove('active');
    menuIcon.classList.add('bi-list');
    menuIcon.classList.remove('bi-x');
  });
});

window.addEventListener('scroll', () => {
  scrollTop.style.display = window.scrollY > 400 ? 'grid' : 'none';

  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const top = section.offsetTop - 140;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (window.scrollY >= top && window.scrollY < top + height) {
      links.forEach(link => {
        link.classList.remove('active');
        const activeLink = document.querySelector(`.navmenu a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      });
    }
  });
});

scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.addEventListener('mousemove', e => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});
