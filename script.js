// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    if (name && email && message) {
        document.getElementById('form-response').textContent = "Thank you, " + name + "! Your message has been sent.";
        this.reset();
    } else {
        document.getElementById('form-response').textContent = "Please fill in all fields.";
    }
});

// Scroll Animations
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-up');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
sliders.forEach(slider => appearOnScroll.observe(slider));

// Testimonial Carousel
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');
function showTestimonial() {
    testimonials.forEach((t, i) => { t.classList.remove('show'); });
    testimonialIndex++;
    if (testimonialIndex > testimonials.length) testimonialIndex = 1;
    testimonials[testimonialIndex - 1].classList.add('show');
    setTimeout(showTestimonial, 4000);
}
showTestimonial();
