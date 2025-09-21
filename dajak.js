//Buttons

const homeButton = document.getElementById('home-button');
const projectButton = document.getElementById('project-button');
const partnerButton = document.getElementById('partner-button');
const socialButton = document.getElementById('social-button');
const closeButton = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.mobile-nav');
const navIcon = document.getElementById('nav-icon');
//Below essentially changes .nav-btn to an array so we can use methods
const navButtons = document.querySelectorAll('.nav-btn');
const socialButtons = document.querySelectorAll('.social-logo');
//button change-function

const buttonColor = (button) => {
    button.target.style.backgroundColor = '#0f0f0fff';
    button.target.style.color = '#66abd3ff';
}

const returnButtonColor = (button) => {
    button.target.style.backgroundColor = '';
    button.target.style.color = ''
}


//application of button change

navButtons.forEach(btn => {
    btn.onmouseover = buttonColor;
    btn.onmouseleave = returnButtonColor;
}
)

//social button color change

socialButtons.forEach(btn => {
    btn.onmouseover = buttonColor;
    btn.onmouseleave = returnButtonColor;
}
)

//closing the nav bar for mobile

const openNav = () => {
   mobileNav.classList.add('open');
   navIcon.classList.add('hidden');
};

const exitNav = () => {
    mobileNav.classList.remove('open');
    navIcon.classList.remove('hidden')
};

closeButton.onclick = exitNav;
navIcon.onclick = openNav;


