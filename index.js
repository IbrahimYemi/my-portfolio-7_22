// navbar code
const barIcon = document.querySelector(".fa-bars")
const navtag = document.querySelector("nav");
barIcon.addEventListener("click", ()=>{
        barIcon.classList.toggle("fa-times")
        navtag.classList.toggle("tabs")
        navtag.style.transition = `all 0.7s ease-in`
})

// sticky navbar
window.addEventListener("scroll",()=>{
    var header = document.querySelector("header");
    header.classList.toggle("fixed-top", window.scrollY > 0)
})

//slide in for all
window.addEventListener("scroll", animated);
function animated(){
    let slider = document.querySelectorAll('.slider')
    slider.forEach(slide=>{
            let reveals = window.innerHeight;
            let showdiv = slide.getBoundingClientRect().top;
            let showpoint = 100;
            if(showdiv < reveals-showpoint){
                slide.classList.add('slide-itin')
            }else{
                slide.classList.remove('slide-itin')
            }
        }
    )
}

// code for skills to show
const skills = document.querySelectorAll('.btn');
skills.forEach(skill=>{
    skill.addEventListener('click',()=>{
        const next = skill.nextElementSibling;
        next.classList.toggle('play')
    })
})

//slide in for all slide card
window.addEventListener("scroll", animate);
function animate(){
    let slider = document.querySelectorAll('.stack-card')
    slider.forEach(slide=>{
            let reveals = window.innerHeight;
            let showdiv = slide.getBoundingClientRect().top;
            let showpoint = 150;
            if(showdiv < reveals-showpoint){
                slide.classList.add('slide-it')
            }else{
                slide.classList.remove('slide-it')
            }
        }
    )
}

window.addEventListener("scroll", throwcard);
function throwcard(){
    let slider = document.querySelectorAll('.portfolio-card')
    slider.forEach(slide=>{
            let reveals = window.innerHeight;
            let showdiv = slide.getBoundingClientRect().top;
            let showpoint = 150;
            if(showdiv < reveals-showpoint){
                slide.classList.add('snap')
            }else{
                slide.classList.remove('snap')
            }
        }
    )
}

// sticky top
window.addEventListener("scroll",()=>{
    var header = document.querySelector("header");
    header.classList.toggle("fixed-top", window.scrollY > 0)
})

// theme changer
let container = document.querySelector('.pallete');
container.addEventListener('click', ()=>{
    let box = document.querySelector('.color-change');
    box.classList.toggle('active')
})

let theme1=document.querySelector('.color-change1')
let theme2=document.querySelector('.color-change2')
let theme3=document.querySelector('.color-change3')
let theme4=document.querySelector('.color-change4')

// element to change
const body = document.querySelector('body');
const body2 = document.querySelector('body');
const blob1 = document.querySelector('.blob1');
const blob2 = document.querySelector('.blob2');
const logo = document.querySelector('.logo');
const nav = document.querySelectorAll('.nav');
const typedWords = document.querySelectorAll('.auto-words');
// css variable function
var r = document.querySelector(':root');


// --primary: #060b24;
// --secondary: #FAFAFA;
// --tertiary: aqua;
// --about: #0d0d0d;
// --words: #000000;
// --white: #ffffff;
// --secondaryblob: #cac6c6;
//--header: #060b24;

function myFunction_set1() {
    r.style.setProperty('--primary', '#060b24');
    r.style.setProperty('--secondary', '#FAFAFA');
    r.style.setProperty('--tertiary', 'aqua');
    r.style.setProperty('--about', '#0d0d0d');
    r.style.setProperty('--words', '#000000');
    r.style.setProperty('--white', '#ffffff');
    r.style.setProperty('--secondaryblob', '#c0bbbb');
    r.style.setProperty('--header', '#060b24');
}
function myFunction_set2() {
    r.style.setProperty('--primary', '#eb8f05');
    r.style.setProperty('--secondary', '#452401');
    r.style.setProperty('--tertiary', '#100ced');
    r.style.setProperty('--about', '#adb5cc');
    r.style.setProperty('--words', '#000000');
    r.style.setProperty('--white', '#ffffff');
    r.style.setProperty('--secondaryblob', '#dfd9d9');
    r.style.setProperty('--header', '#0d0000');
}
function myFunction_set3() {
    r.style.setProperty('--primary', '#1205cc');
    r.style.setProperty('--secondary', '#041436');
    r.style.setProperty('--tertiary', '#106908');
    r.style.setProperty('--about', '#adb5cc');
    r.style.setProperty('--words', '#106908');
    r.style.setProperty('--white', '#ffffff');
    r.style.setProperty('--secondaryblob', '#dfd9d9');
    r.style.setProperty('--header', '#1205cc');
}
function myFunction_set4() {
    r.style.setProperty('--primary', '#060b24');
    r.style.setProperty('--secondary', '#8f8181');
    r.style.setProperty('--tertiary', '#704a03');
    r.style.setProperty('--about', '#adb5cc');
    r.style.setProperty('--words', 'white');
    r.style.setProperty('--white', '#0d0000');
    r.style.setProperty('--secondaryblob', '#dfd9d9');
    r.style.setProperty('--header', '#fefefe');
}


// function to add the picked theme outside



theme1.addEventListener('click', ()=>{
    myFunction_set1();
    body.style.color = "#020812"
    body2.style.backgroundColor = "#FFFFFF"
    blob1.style.backgroundColor = "#FAFAFA"
    blob2.style.backgroundColor = "#FAFAFA"
    blob1.style.transition = `all 0.5s ease`
    blob2.style.transition = `all 0.5s ease`
    logo.style.color = "#020812"
    nav.forEach(navs => navs.style.color = "#020812")
    theme1.style.backgroundColor = "#570332"
    theme4.style.backgroundColor = "#292929"
    theme3.style.backgroundColor = "#292929"
    theme2.style.backgroundColor = "#292929"
})

theme2.addEventListener('click', ()=>{
    myFunction_set2();
    theme2.style.backgroundColor = "#570332"
    theme1.style.backgroundColor = "#292929"
    theme4.style.backgroundColor = "#292929"
    theme3.style.backgroundColor = "#292929"
    blob1.style.transition = `all 0.5s ease`
    blob2.style.transition = `all 0.5s ease`
})

theme3.addEventListener('click', ()=>{
    myFunction_set3();
    theme3.style.backgroundColor = "#570332"
    theme2.style.backgroundColor = "#292929"
    theme1.style.backgroundColor = "#292929"
    theme4.style.backgroundColor = "#292929"
    blob1.style.transition = `all 0.5s ease`
    blob2.style.transition = `all 0.5s ease`
})


theme4.addEventListener('click', ()=>{
    myFunction_set4();
    theme4.style.backgroundColor = "#570332"
    theme3.style.backgroundColor = "#292929"
    theme2.style.backgroundColor = "#292929"
    theme1.style.backgroundColor = "#292929"
    blob1.style.transition = `all 0.5s ease`
    blob2.style.transition = `all 0.5s ease`
})


