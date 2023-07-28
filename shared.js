// nav bar
const bars = document.querySelector('#bars');
const cross = document.querySelector('#cross');
const navList =  document.querySelector('.nav-list');
bars.addEventListener('click', function(){
  
       navList.style.left = '35%';
       backdrop.style.display = 'block';

    }
)
// cross.addEventListener('click', function(){
//       navList.style.left = '100vw';

// })

//multiple readmore buttons

let numOfChar = 80;
let contents = document.querySelectorAll('.content');
contents.forEach(content =>{
    if(content.textContent.length < numOfChar){
        content.nextElementSibling.getElementsByClassName.display = "none";
    }
    else{
        let displayText = content.textContent.slice(0, numOfChar);
        let moreText = content.textContent.slice(numOfChar);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}<span>`;
    }
})
function readMore(btn){
    let project = btn.parentElement;
    project.querySelector(".dots").classList.toggle("hide");
    project.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}
// readmore button js
function showMore(){
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('more');
    const btn = document.getElementById('btn');
    if (dots.style.display === "none"){
    dots.style.display = "inline";
    btn.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

// backdrop message popup

const backdrop = document.querySelector('.backdrop');
const dropContact = document.querySelector('#contact-minimize');
const messageIcon = document.querySelector('#message');
const contactForm = document.querySelector('.contact-form');
messageIcon.addEventListener('click', function(){
    backdrop.style.display = 'block';
    contactForm.style.display = 'block';
})
backdrop.addEventListener('click', ()=>{
    backdrop.style.display = 'none';
    contactForm.style.display = 'none';
    navList.style.left = '100%'
})
dropContact.addEventListener('click', function(){
    backdrop.style.display = 'none';
    contactForm.style.display = 'none';
})