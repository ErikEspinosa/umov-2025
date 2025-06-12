const IMAGES = [
        'student-1.webp',
        'student-2.webp',
        'student-3.webp',
        'student-4.webp',
        'student-5.webp',
        'student-6.webp',
        'student-7.webp',
        'student-8.webp',
        'student-9.webp',
        'student-10.webp',
    ]
const IMAGES_PATH = '../assets/students/';

const TESTIMONIALS = [
    {
        id: 1,
        image: "testimonial-1.webp",
        description: 'Soy egresada de UMOV; quiero darle las gracias por haber sido parte de mi formación como profesionista. Excelentes maestros y siempre disponibles para sus alumnos.'
    },
    {
        id: 2,
        image: "testimonial-2.webp",
        description: 'Me gusta porque es una Universidad pensada no solo para estudiantes, sino para personas que ya tenemos una vida laboral y necesitamos accesibilidad.'
    },
    {
        id: 3,
        image: "testimonial-3.webp",
        description: 'Me encantan los horarios libres. Uno puede estudiar a su ritmo. Me la recomendó mi hermano y quedé encantada. Estoy sumamente agradecida por la oportunidad de continuar mis estudios'
    },
    {
        id: 4,
        image: "testimonial-4.webp",
        description: 'Me encantan los horarios libres. Uno puede estudiar a su ritmo. Me la recomendó mi hermano y quedé encantada. Estoy sumamente agradecida por la oportunidad de continuar mis estudios'
    },
    {
        id: 5,
        image: "testimonial-5.webp",
        description: 'Me encantan los horarios libres. Uno puede estudiar a su ritmo. Me la recomendó mi hermano y quedé encantada. Estoy sumamente agradecida por la oportunidad de continuar mis estudios'
    }
]
const TESTIMONIALS_PATH = '../assets/testimonials/';

// Resize screen
let documentWidth = document.body.clientWidth
let isMobile = documentWidth <= 480
let isTablet = documentWidth >= 481 && documentWidth <= 820

// Menu
const menuItems = document.querySelectorAll('.nav-main-links-item');
const submenuWrapper = document.querySelector('.nav-main-submenu-wrapper');
menuItems && menuItems.forEach(item => {
    const submenu = item.querySelector(".nav-main-links-submenu");
    item.addEventListener("mouseover", () => {
        if (submenuWrapper) submenuWrapper.style.display = "block"
        submenu && submenu.classList.add("show-submenu")
    })
    item.addEventListener("mouseout", () => {
        if (submenuWrapper) submenuWrapper.style.display = "none"
        submenu && submenu.classList.remove("show-submenu")
    })
})

const setBodyMargin = () => {
    const navbar = document.querySelector('.nav-main');
    if (navbar) {
        const navBarRects = navbar.getClientRects();
        document.body.style.marginTop = `${navBarRects[0].height}px`;
    }
}

const loadTestimonialsImages = () => {
    const student1 = document.querySelector('#student-1');
    const student2 = document.querySelector('#student-2');
    const totalImages = IMAGES.length;
    let index1, index2;
    index1 = Math.floor(Math.random() * totalImages);
    index2 = Math.floor(Math.random() * totalImages);
    while (index1 === index2) {
        index2 = Math.floor(Math.random() * totalImages);
    }
    if (student1) student1.src = `${IMAGES_PATH}${IMAGES[index1]}`;
    if (student2) student2.src = `${IMAGES_PATH}${IMAGES[index2]}`;
}

const loadTestimonials = () => {
    const testimonialDesc1 = document.querySelector('#testimonial-description-1');
    const testimonialImage1 = document.querySelector('#testimonial-image-1');
    const testimonialDesc2 = document.querySelector('#testimonial-description-2');
    const testimonialImage2 = document.querySelector('#testimonial-image-2');
    const testimonialDesc3 = document.querySelector('#testimonial-description-3');
    const testimonialImage3 = document.querySelector('#testimonial-image-3');
    const testimonialDescMobile = document.querySelector('#testimonial-description-mobile');
    const testimonialImageMobile = document.querySelector('#testimonial-image-mobile');
    const totalTestimonials = TESTIMONIALS.length;
    let index1, index2, index3, index4;
    do {
        index1 = Math.floor(Math.random() * totalTestimonials);
        index2 = Math.floor(Math.random() * totalTestimonials);
        index3 = Math.floor(Math.random() * totalTestimonials);
    } while (index1 === index2 || index1 === index3 || index2 === index3);
    index4 = Math.floor(Math.random() * totalTestimonials);
    if (testimonialDesc1) testimonialDesc1.textContent = TESTIMONIALS[index1].id + ') ' + TESTIMONIALS[index1].description;
    if (testimonialImage1) testimonialImage1.src = `${TESTIMONIALS_PATH}${TESTIMONIALS[index1].image}`;
    if (testimonialDesc2) testimonialDesc2.textContent = TESTIMONIALS[index2].id + ') ' + TESTIMONIALS[index2].description;
    if (testimonialImage2) testimonialImage2.src = `${TESTIMONIALS_PATH}${TESTIMONIALS[index2].image}`;
    if (testimonialDesc3) testimonialDesc3.textContent = TESTIMONIALS[index3].id + ') ' + TESTIMONIALS[index3].description;
    if (testimonialImage3) testimonialImage3.src = `${TESTIMONIALS_PATH}${TESTIMONIALS[index3].image}`;
    if (testimonialDescMobile) testimonialDescMobile.textContent = TESTIMONIALS[index4].id + ') ' + TESTIMONIALS[index4].description;
    if (testimonialImageMobile) testimonialImageMobile.src = `${TESTIMONIALS_PATH}${TESTIMONIALS[index4].image}`;
}

const createOverlay = (elementClass, width) => {
    if (elementClass) {
        const element = document.querySelector(`.${elementClass}`) || null;
        if (element) {
            const rects = element.getClientRects();
            const overlay = document.createElement('div');
            overlay.classList.add(`${elementClass}-overlay`);
            overlay.classList.add('overlay');
            overlay.style.top = `${rects[0].top}px`;
            overlay.style.height = `${rects[0].height}px`;
            if (width) {
                overlay.style.width = `${width}px`;
            }
            document.body.appendChild(overlay);
        }
    }
}

window.addEventListener("load", () => {
    setBodyMargin();
    createOverlay('statics-grid');
    createOverlay('press-grid');
    createOverlay('why-study-grid', 80);
    loadTestimonialsImages();
    loadTestimonials();
});

window.addEventListener("resize", () => {
    documentWidth = document.body.clientWidth
    isMobile = documentWidth <= 480
    isTablet = documentWidth >= 481 && documentWidth <= 768
    setBodyMargin();
});