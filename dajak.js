//Buttons

const homeButton = document.getElementById('home-button');
const projectButton = document.getElementById('project-button');
const partnerButton = document.getElementById('partner-button');
const socialButton = document.getElementById('social-button');
//Below essentially changes .nav-btn to an array so we can use methods
const navButtons = document.querySelectorAll('.nav-btn');
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
