//sections
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substr(1);

      // Toggle the active class for menu items
      navLinks.forEach(link => link.parentElement.classList.remove('active'));
      this.parentElement.classList.add('active');

      // Toggle the active class for sections
      sections.forEach(section => section.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Show the first section on page load
  sections[0].classList.add('active');
});

//gallery
document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');

  lightGallery(gallery, {
    selector: 'a',
    download: false, // Disable download button (optional)
    thumbnail: true, // Show thumbnails for the images
    animateThumb: true, // Enable animated thumbnails
    showThumbByDefault: false, // Hide static thumbnails when using animated thumbnails
  });
});

//navigation
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuLinks = document.querySelector('.menu-links');

  menuToggle.addEventListener('click', function() {
    menuLinks.classList.toggle('active'); // Toggle the active class to show/hide the menu on click
  });

  // Close the mobile menu when clicking outside the menu
  document.addEventListener('click', function(event) {
    if (!menuToggle.contains(event.target) && !menuLinks.contains(event.target)) {
      menuLinks.classList.remove('active');
    }
  });

  // Close the mobile menu when a menu item is clicked
  document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', function() {
      menuLinks.classList.remove('active');
    });
  });
});






