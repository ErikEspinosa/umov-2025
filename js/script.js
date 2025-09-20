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
const IMAGES_PATH = './assets/students/';

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
const TESTIMONIALS_PATH = './assets/testimonials/';

// Resize screen
let documentWidth = document.body.clientWidth
let isMobile = documentWidth <= 600
let isTablet = documentWidth >= 601 && documentWidth <= 1024
let fromTablet = false;

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

// Mobile menu
let isMobileMenuVisible = false;
const mobileMenu = document.querySelector('.mobile-menu');

const closeMobileSubmenus = () => {
    const mobileSubmenus = document.querySelectorAll('.mobile-menu-item-submenu');
    mobileSubmenus && mobileSubmenus.forEach(submenu => {
        submenu.style.display = "none"
    })
    const mobileMenuItemsName = document.querySelectorAll('.mobile-menu-item-name');
    mobileMenuItemsName && mobileMenuItemsName.forEach(item => {
        item.classList.remove('mobile-menu-item-open');
        item.classList.add('mobile-menu-item-close');
    })
}

const openMobileMenu = () => {
    if (mobileMenu) mobileMenu.style.display = 'block';
    isMobileMenuVisible = !isMobileMenuVisible;
}

const closeMobileMenu = () => {
    if (mobileMenu) mobileMenu.style.display = 'none';
    isMobileMenuVisible = !isMobileMenuVisible;
}

const navMainMobileMenu = document.querySelector('.nav-main-mobile-menu-icon');
navMainMobileMenu && navMainMobileMenu.addEventListener('click', () => {
    openMobileMenu();
})

const mobileMenuClose = document.querySelector('.mobile-menu-close');
mobileMenuClose && mobileMenuClose.addEventListener('click', () => {
    closeMobileMenu();
})

const mobileMenuItems = document.querySelectorAll(".mobile-menu-item");
mobileMenuItems && mobileMenuItems.forEach(item => {
    let isSubmenuVisible = false;
    const mobileMenuItemTitle = item.querySelector('.mobile-menu-item-title');
    const mobileMenuItemName = item.querySelector('.mobile-menu-item-name');
    const mobileMenuItemSubmenu = item.querySelector('.mobile-menu-item-submenu');
    mobileMenuItemTitle && mobileMenuItemTitle.addEventListener('click', () => {
        if (mobileMenuItemSubmenu) mobileMenuItemSubmenu.style.display = isSubmenuVisible ? 'none' : 'block';
        if (isSubmenuVisible) {
            mobileMenuItemName.classList.remove('mobile-menu-item-open');
            mobileMenuItemName.classList.add('mobile-menu-item-close');
        } else {
            mobileMenuItemName.classList.remove('mobile-menu-item-close');
            mobileMenuItemName.classList.add('mobile-menu-item-open');
        }
        isSubmenuVisible = !isSubmenuVisible;
    })
})
const firstMobileMenuItem = mobileMenuItems[0].querySelector('.mobile-menu-item-title');
firstMobileMenuItem.click();

// Funtions
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

const filterItems = (e, filterType) => {
    e.preventDefault();
    const allFilters = document.querySelectorAll('.hero-main-filter');
    const allItems = document.querySelectorAll('.hero-main-items');
    const filter = document.querySelector(`.hero-main-filter-${filterType}`);  
    const items = document.querySelectorAll(`.hero-main-items-${filterType}`);
    const activeClass = 'hero-main-filter-active';

    allFilters && allFilters.forEach(element => {
        element.classList.remove(activeClass);
    });
    filter && filter.classList.add(activeClass);

    allItems && allItems.forEach(element => {
        element.style.display = 'none';
    });
    items.forEach(element => {
        if (isMobile && element.classList.contains('hero-main-items-mobile')) {
            element.style.display = 'block';
        }
        if (isTablet && element.classList.contains('hero-main-items-tablet')) {
            element.style.display = 'block';
        }
        if (!isMobile && !isTablet && element.classList.contains('hero-main-items-desktop')) {
            element.style.display = 'block';
        }
    });
}

const filterItemsCareers = (e, filterType) => {
    e.preventDefault();
    const allFilters = document.querySelectorAll('.careers-filter');
    const allItems = document.querySelectorAll('.careers-list-grid');
    const allSelect = document.querySelectorAll('.select-item');
    const filter = document.querySelector(`.careers-filter-${filterType}`);
    const item = document.querySelector(`.careers-list-grid-${filterType}`);
    const select = document.querySelector(`#select-${filterType}`);
    const activeClass = 'careers-filter-active';

    allFilters && allFilters.forEach(element => {
        element.classList.remove(activeClass);
    });
    filter && filter.classList.add(activeClass);
    
    allItems && allItems.forEach(element => {
        element.style.display = 'none';
    });
    if (item) item.style.display = 'grid';

    allSelect && allSelect.forEach(element => {
        element.style.display = 'none';
    });
    if (select && (isTablet || isMobile)) select.style.display = 'block';
}

// Event listeners
const careersFilterCareers = document.querySelector('.careers-filter-careers');
const careersFilterMasters = document.querySelector('.careers-filter-masters');
careersFilterCareers && careersFilterCareers.addEventListener('click', (e) => { filterItemsCareers(e, 'careers')});
careersFilterMasters && careersFilterMasters.addEventListener('click', (e) => { filterItemsCareers(e, 'masters')});

const heroFilterCareers = document.querySelector('.hero-main-filter-careers');
const heroFilterMasters = document.querySelector('.hero-main-filter-masters');
heroFilterCareers && heroFilterCareers.addEventListener('click', (e) => { filterItems(e, 'careers'); });
heroFilterMasters && heroFilterMasters.addEventListener('click', (e) => { filterItems(e, 'masters'); });

window.addEventListener("load", (e) => {
    setBodyMargin();
    loadTestimonialsImages();
    loadTestimonials();
    filterItems(e, 'careers');
    filterItemsCareers(e, 'careers');
});

window.addEventListener("resize", (e) => {
    const newDocumentWidth = document.body.clientWidth;
    if (documentWidth !== newDocumentWidth) {
        if (!fromTablet)
            if (newDocumentWidth > documentWidth && documentWidth < 841) 
                fromTablet = true;
        documentWidth = newDocumentWidth;
        isMobile = documentWidth <= 600;
        isTablet = documentWidth >= 601 && documentWidth <= 1024;
        if (isMobile || isTablet || fromTablet) {
            setBodyMargin();
            filterItems(e, 'careers');
            filterItemsCareers(e, 'careers');
            fromTablet = false;
        }
    }
});