
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const closeBtn = document.getElementById('close-btn');
  const links = navLinks.querySelectorAll('a');

  // Open menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
  });

  // Close menu when close button is clicked
  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });

  // Close menu when any link is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

