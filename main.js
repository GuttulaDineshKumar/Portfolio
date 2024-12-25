import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Form submission handler
const contactForm = document.querySelector('.contact-form')
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault()
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.')
    this.reset()
  })
}

// Add fade-in animation to sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in')
    }
  })
}, {
  threshold: 0.1
})

document.querySelectorAll('section').forEach((section) => {
  observer.observe(section)
})
// Resume download handler
const resumeButton = document.querySelector('a[download]')
if (resumeButton) {
  resumeButton.addEventListener('click', () => {
  });
}
