// Optional simple animation or interaction
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#fff8f0';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
