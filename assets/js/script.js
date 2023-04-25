// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

elements.forEach(ele => {

ele.addEventListener("click", (e) => {

    e.preventDefault();

    document.querySelector(e.target.dataset.section).scrollIntoView({

    behavior: 'smooth'

    });

});

});

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);
// Handle Active State
function handleActive(ev) {

// Remove Active Class From All Childrens
ev.target.parentElement.querySelectorAll(".active").forEach(element => {

element.classList.remove("active");

});

// Add Active Class On Self
ev.target.classList.add("active");

}

// Random Background Option
let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

bulletsSpan.forEach(span => {

span.classList.remove("active");

});

if (bulletLocalItem === 'block') {

bulletsContainer.style.display = 'block';

document.querySelector(".bullets-option .yes").classList.add("active");

} else {

bulletsContainer.style.display = 'none';

document.querySelector(".bullets-option .no").classList.add("active");

}

}

bulletsSpan.forEach(span => {

span.addEventListener("click", (e) => {

if (span.dataset.display === 'show') {

    bulletsContainer.style.display = 'block';

    localStorage.setItem("bullets_option", 'block');

} else {

    bulletsContainer.style.display = 'none';

    localStorage.setItem("bullets_option", 'none');

}

handleActive(e);

});

});

// Reset Button
document.querySelector(".reset-options").onclick = function () {

// localStorage.clear();
localStorage.removeItem("color_option");
localStorage.removeItem("background_option");
localStorage.removeItem("bullets_option");

// Reload Window
window.location.reload();

};
document.querySelector('.loader-container').classList.add('fade-out');
// }
function fadeOut() {
    setInterval(
        () =>
        {
            document.querySelector('.loader-container').classList.add('fade-out');
        }, 500);
}
window.onload = fadeOut;
// pre loader end
/// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {

  // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
  // console.log(localStorage.getItem("color_option"));

document.documentElement.style.setProperty('--main-color', mainColors);

// Remove Active Class From All Colors List Item
document.querySelectorAll(".colors-list li").forEach(element => {

element.classList.remove("active");

// Add Active Class On Element With Data-Color === Local Storage Item
if (element.dataset.color === mainColors) {

    // Add Active Class
    element.classList.add("active");

}

});

}
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Mazen Mohamed";
            $("#favicon").attr("href", "assets/images//mazen-1.jpeg");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
});
    // <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Front-end development", "Freelancer", "Web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 45,
    backDelay: 500,
});
// <!-- typed js effect ends -->
$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});
 // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {

// Remove Active Class From All Spans
document.querySelectorAll(".random-backgrounds span").forEach(element => {

element.classList.remove("active");

});

if (backgroundLocalItem === 'true') {

backgroundOption = true;

document.querySelector(".random-backgrounds .yes").classList.add("active");

} else {

backgroundOption = false;

document.querySelector(".random-backgrounds .no").classList.add("active");

}

}

// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

// Toggle Class Fa-spin For Rotation on Self
this.classList.toggle("fa-spin");

// Toggle Class Open On Main Settings Box
document.querySelector(".settings-box").classList.toggle("open");

};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

// Click On Every List Items
li.addEventListener("click", (e) => {

// Set Color On Root
document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

// Set Color On Local Storage
localStorage.setItem("color_option", e.target.dataset.color);

handleActive(e);

});

});

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach(span => {

// Click On Every Span
span.addEventListener("click", (e) => {

handleActive(e);

if (e.target.dataset.background === 'yes') {

    backgroundOption = true;

    randomizeImgs();

    localStorage.setItem("background_option", true);

} else {

    backgroundOption = false;

    clearInterval(backgroundInterval);

localStorage.setItem("background_option", false);

}

});

});
// // Select Landing Page Element
let imagesSrc = document.getElementById("image");

// Get Array Of Imgs
let imgsArray = [ "mazen-1.jpeg", "mazen-2.jpeg", "mazen-3.jpeg", "mazen-5.jpeg"];

// Function To Randomize Imgs
function randomizeImgs() {
setInterval(() => {

    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // Change Background Image Url 
    imagesSrc.src = `../../assets/images/${imgsArray[randomNumber]}` ;

}, 10000);

}
randomizeImgs();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

// Skills Offset Top
let skillsOffsetTop = ourSkills.offsetTop;

// Skills Outer Height
let skillsOuterHeight = ourSkills.offsetHeight;

// Window Height
let windowHeight = window.innerHeight;

// Window ScrollTop
let windowScrollTop = window.pageYOffset;

if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

allSkills.forEach(skill => {

    skill.style.width = skill.dataset.progress;

});

}

};
// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });