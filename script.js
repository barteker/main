const fonts = [
    { name: 'Clash Grotesk', designer: 'Indian Type Foundry', foundry: 'Indian Type Foundry' },
    { name: 'Aktura', designer: 'Indian Type Foundry', foundry: 'Indian Type Foundry' },
    { name: 'Chillax', designer: 'Indian Type Foundry', foundry: 'Indian Type Foundry' },
    { name: 'Nippo', designer: 'Indian Type Foundry', foundry: 'Indian Type Foundry' },
    { name: 'Cabinet Grotesk', designer: 'Indian Type Foundry', foundry: 'Indian Type Foundry' },
    { name: 'PubliFluorChrystelise', designer: 'Chrystel Crickx', foundry: 'OSP Foundry' },
    { name: 'Sans Guilt Wafer', designer: 'OSP Foundry', foundry: 'OSP Foundry' },
    { name: 'Poppins', designer: 'Jonny Pinhorn & Ninad Kale', foundry: 'Indian Type Foundry' },
    { name: 'Terminal Grotesque', designer: 'Raphaël Bastide & Jérémy Landes', foundry: 'Use & Modify' },
    { name: 'Bocalupo', designer: 'Ambre Ruggeri', foundry: 'XCicéro' },
    { name: 'Young Serif', designer: 'Bastien Sozeau', foundry: 'upload.fr' },
    { name: 'Array', designer: 'Indian Type Foundry', foundry: 'Indian Type Foundry' },
    { name: 'Sniglet', designer: 'Haley Fiege', foundry: 'The League of Moveable Type' },
    { name: 'jgs Font', designer: 'Adel Faure', foundry: 'Velvetyne' }
];

let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

const title = document.querySelector('.title');
const credits = document.querySelector('.font-credits');
let currentFont = 0;
let fontInterval;
const baseSize = vw * 0.1; //matches font size of h1

title.addEventListener('mouseenter', () => {
    fontInterval = setInterval(() => {
        currentFont = (currentFont + 1) % fonts.length;
        updateFont();
    }, 100);
});

title.addEventListener('mouseleave', () => {
    clearInterval(fontInterval);
    updateCredits();
});

function updateFont() {
    const font = fonts[currentFont];
    title.style.fontFamily = font.name;
}

function updateCredits() {
    const font = fonts[currentFont];
    credits.textContent = `Currently using ${font.name} by ${font.designer} (${font.foundry})`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCredits();
});

// // Add this to your existing JavaScript
// const nav = document.querySelector('.side-nav');
// const navInitialOffset = window.innerHeight / 2; // Middle of viewport

// window.addEventListener('scroll', () => {
//     if (window.scrollY > navInitialOffset) {
//         nav.classList.add('sticky');
//     } else {
//         nav.classList.remove('sticky');
//     }
// }); 