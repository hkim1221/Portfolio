'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// make navbar transparent when it's on top //
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else {
        navbar.classList.remove('navbar--dark');
    }
});

//scrolling when tap navbar menu//

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if (link ==null) {
        return;
    }
    scrollIntoView(link);
});


//click Contact me button on home//
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact'); 

});

//Make home slowly fade out //
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//show arrow up button when scrolling down//
const arrowup = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowup.classList.add('visible');
    }else {
        arrowup.classList.remove('visible');
    }
});

//click on arrow up button go Home//
arrowup.addEventListener('click', () => {
    scrollIntoView('#home');
});




//Project Filter//
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener ('click', (e) => {
    const filter =e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    console.log(filter);
    projects.forEach((project) => {
        console.log(project.dataset.type);
        if (filter === '*' || filter === project.dataset.type){
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });
});



function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
    
}