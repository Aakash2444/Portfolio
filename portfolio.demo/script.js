// Animate header text on load
gsap.from("#sidemenu li", {
    opacity: 0,
    y: -20, // Slide from above
    duration: 1,
    stagger: 0.2, // Delay each li by 0.2s
    ease: "power2.out"
  });
gsap.from(".header-text h1", { 
    opacity: 0, y: -50, duration: 1, ease: "power2.inOut",scale:0
 });

// Fade-in effect for About section
gsap.from("#about .about-col-1", {
  scrollTrigger: "#about",
  opacity: 0,
  x: -100,
  duration: 1.5,
  ease: "power2.out"
});

gsap.from("#about .about-col-2", {
  scrollTrigger: "#about",
  opacity: 0,
  x: 100,
  duration: 1.5,
  ease: "power2.out"
});

// Services section animation (fade-in and scale)
gsap.from("#services .services-list div", {
  scrollTrigger: "#services",
  opacity: 0,
  scale: 0.8,
  duration: 1,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// Portfolio section hover effect
document.querySelectorAll('.work').forEach(work => {
  work.addEventListener('mouseenter', () => {
    gsap.to(work.querySelector('.layer'), { opacity: 1, top: 0, duration: 0.5 });
  });

  work.addEventListener('mouseleave', () => {
    gsap.to(work.querySelector('.layer'), { opacity: 0, top: -100, duration: 0.5 });
  });
});

// Contact form fade-in
gsap.from("#contact .contact-left, #contact .contact-right", {
  scrollTrigger: "#contact",
  opacity: 0,
  x: -50,
  duration: 1.5,
  ease: "power2.out",
  stagger: 0.5
});