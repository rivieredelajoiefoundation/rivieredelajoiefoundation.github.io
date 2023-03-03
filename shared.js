// nav bar
const bars = document.querySelector('#bars');
const cross = document.querySelector('#cross');
const navList =  document.querySelector('.nav-list');
bars.addEventListener('click', function(){
  
       navList.style.left = '0';
    }
)
cross.addEventListener('click', function(){
      navList.style.left = '100vw';      
})

// image slider

// const imageList = document.querySelectorAll('.image-slider img')
// setTimeout(slideShow, 2000)
// function slideShow(){
// for(let i = 1; i < imageList.length; i++){
//     imageList[i].style.display = 'block';
//     let previousShow = imageList.slice(0,i);
//     let nextShow = imageList.slice(i);
//     for(image of previousShow){       
//         image.style.display = 'none'
//     }
//     for(image of nextShow){
//         image.style.display = 'none'
//     }
// }
// }

let numOfChar = 80;
let contents = document.querySelectorAll('.content');
// console.log(content);
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

// Read more on home page 
const button = document.querySelector('.about-info button');
const moreText = document.querySelector('#more-text');
button.addEventListener('click', function(){
if(moreText.style.display !== 'none'){
    moreText.style.display = 'none';
    button.innerHTML = 'Read Less';
}
else{
    moreText.style.display = 'inline';
    button.innerHTML = 'Read More'
}
}
)
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

