/*==================== MENU SHOW Y HIDDEN ====================*/
const menuBtn = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const closeBtn = document.querySelector(".nav__close");
const navLink = document.querySelectorAll(".nav__link");
/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("showmenu");
    });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        navMenu.classList.toggle("showmenu");
    });
}
/*==================== REMOVE MENU MOBILE ====================*/
navLink.forEach(link => link.addEventListener("click", function () {
    navMenu.classList.toggle("showmenu");
})

);
// ALTERNATIVE WAY====================??//
// function linkAction() {
//     navMenu.classList.toggle("showmenu");
// };
// navLink.forEach(function (link) {
//     link.addEventListener("click", linkAction);
// });


/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");
function toggleSkills() {
    //which header clicked its own parent class name
    let itemClass = this.parentNode.className;


    //setting every skills conentent class name skills__close at first
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
        // console.log(skillsContent[i]);
    }
    // console.log(itemClass);
    // //setting clicked header's parents class name skills__open to show details
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }

    // if i clicl the close header then it will enter into if condition and if i click any open header then it
    // not have to check anything because by deafult we are closing all skills content in for loop.
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})



/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)
        // console.log(target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})





/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal');
// console.log(modalViews);
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')

}


modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        668: {
            slidesPerView: 2,
        }

    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset


    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href="#' + sectionId + '"]').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href="#' + sectionId + '"]').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    // console.log(this.scrollY);
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.querySelector("#theme-button");
console.log(themeButton)

themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        themeButton.className = "uil uil-moon change-theme uil uil-sun";
        console.log(themeButton)
    }
    else {
        themeButton.className = "uil uil-moon change-theme";
    }
})