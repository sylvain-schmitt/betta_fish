//function for remove hash in url
window.addEventListener("DOMContentLoaded", function(e) {
    let links = document.getElementsByTagName("A");
    for(let i=0; i < links.length; i++) {
        if(!links[i].hash) continue;
        if(links[i].origin + links[i].pathname !== self.location.href) continue;
        (function(anchorPoint) {
            links[i].addEventListener("click", function(e) {
                anchorPoint.scrollIntoView(true);
                e.preventDefault();
            }, false);
        })(document.getElementById(links[i].hash.replace(/#/, "")));
    }
}, false);

//function for change background on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    header.classList.toggle('sticky', window.scrollY > 80);
});

/*navigation*/
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const navigation = document.querySelector('.nav-list')
const navigationItems = document.querySelectorAll('.nav-list a')
menuIcon.addEventListener('click' ,  () =>{
    navbar.classList.toggle('change');
    navigation.classList.toggle("active");
    navigationItems.forEach((navigationItem) => {
        navigationItem.addEventListener("click", () => {
            navbar.classList.remove("change");
            navigation.classList.remove("active");
        });
    });
});

let mainNavLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
    }
}

