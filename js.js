
//============================================================================ nav bar ======================================================================


function togglecheck() {
  var screenWidth = window.innerWidth;
  var menuList = document.getElementById("menulist");
  var menuListItems = menuList.getElementsByTagName("li");

  if (screenWidth > 1150) {
    menuList.style.display = "none";
    for (var i = 0; i < menuListItems.length; i++) {
      menuListItems[i].style.display = "none";
    }
  }
}
document.addEventListener("DOMContentLoaded", function() {
  togglecheck(); 
});

window.addEventListener("resize", function() {
  togglecheck(); 
});


function toggleMenu() {
  var menuList = document.getElementById("menulist");
  var menuListItems = menuList.getElementsByTagName("li");
  if (menuList.style.display === "none") {
    menuList.style.display = "block";
    for (var i = 0; i < menuListItems.length; i++) {
      menuListItems[i].style.display = "block";
    }
  } else {
    menuList.style.display = "none";
    for (var i = 0; i < menuListItems.length; i++) {
      menuListItems[i].style.display = "none";
    }
  }
}



//============================================================================ Front ======================================================================

document.addEventListener('DOMContentLoaded', () => {

  // typing 1
      const typed1 = new Typed(".typing-1", {
          strings: [
              "<span style='color:white'>Hi, my name is <strong style='color:white'>Nehal Khan</strong></span>",
            ],
          typeSpeed: 70,
          showCursor: false
      });

  // typing 2
      setTimeout(() => {
      const typed2 = new Typed(".typing-2", {
          strings: [
              "<span style='color:white'>I'm</span>",
            ],
          typeSpeed: 70,
          showCursor: false
      });
    }, 3000);
      
  // typing 3
      setTimeout(() => {
      const typed3 = new Typed(".typing-3", {
        strings: [
          "<span style='color:black'>a Program Dev </span>",
          "<span style='color:black'>a Competitive Solver</span>",
          "<span style='color:black'>a Passionate Artist</span>",
          "<span style='color:black'>an Enthu Gamer</span>",
          "<span style='color:black'>an Inspiring Leader</span>",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        showCursor: false
      });
    }, 4000);

});

//============================================================================ work ======================================================================

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; 

    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }

    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 

    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


//============================================================================ Achivement ======================================================================

let currentIndex = 0;
const slides = document.querySelectorAll('.card2');
const totalSlides = slides.length;
let autoplayInterval; 

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 4000); 
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

document.getElementById('left2').addEventListener('click', () => {
  stopAutoplay(); 
  prevSlide();
});

document.getElementById('right2').addEventListener('click', () => {
  stopAutoplay(); 
  nextSlide();
});

showSlide(currentIndex); 
startAutoplay(); 

function updateCircles() {
  const circlesContainer = document.querySelector('.circles-indexx');
  circlesContainer.innerHTML = ''; 

  for (let i = 0; i < totalSlides; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle-indexx');
      if (i === currentIndex) {
          circle.classList.add('active');
      }
      circlesContainer.appendChild(circle);
  }
}

function showSlide(index) {
  slides.forEach((slide, i) => {
      if (i === index) {
          slide.style.display = 'block';
      } else {
          slide.style.display = 'none';
      }
  });
  updateCircles(); 
}
updateCircles();


//============================================================================ SUN MOON ======================================================================

function toggleTheme() {
  const body = document.body;
  const sunIcon = document.querySelector('.sun-icon');
  const copyrightSection = document.querySelector('.copyright');
  const cardSections = document.querySelectorAll('.card');
  const skilltextSection = document.querySelector('.skilltext1');
  const worktextSection = document.querySelector('.worktext');
  const abouttextSection = document.querySelector('.abouttext');
  const educationtextSection = document.querySelector('.educationtext');
  const emailltextSection = document.querySelector('.emaill strong');
  const headerSections = document.querySelectorAll('.header');
  const container3Sections = document.querySelector('.contactcontainer3');
  const menubar = document.querySelector('.menubar');
  const tabletitles = document.querySelectorAll('.form-group-title');


  
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    
    document.styleSheets[0].addRule('body::before', 'background-image: url("assets/img/body_design.png")');
    body.style.background = 'linear-gradient(135deg, rgb(133, 53, 252), rgb(19, 8, 36))';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundAttachment = 'fixed';
    copyrightSection.style.color= 'white';
    cardSections.forEach(cardSection => {
      cardSection.style.background= 'linear-gradient(135deg,rgb(133, 53, 252),rgb(173, 118, 255))';
    });
    skilltextSection.style.color= 'orange';
    worktextSection.style.color= 'greenyellow';
    abouttextSection.style.color= 'greenyellow';
    emailltextSection.style.color= 'orange';
    educationtextSection.style.color= 'orange';
    headerSections.forEach(headerSection => {
      headerSection.style.color= 'white';
      headerSection.style.border= '3px solid white';
    });
    container3Sections.style.background = 'black';
    menubar.style.background= 'rgb(30, 13, 56)';
    tabletitles.forEach(tabletitle => {
      tabletitle.style.border='3px solid white';
      tabletitle.style.color='white';
    });
    document.querySelectorAll('input').forEach(inputElement => {
      inputElement.style.border = '3px solid white';
      inputElement.style.background = 'white';
      inputElement.style.color = 'black';
    });
    document.querySelectorAll('textarea').forEach(textareaElement => {
      textareaElement.style.border = '3px solid white';
      textareaElement.style.background = 'white';
      textareaElement.style.color = 'black';
    });
    

      
  } else {
    document.styleSheets[0].addRule('body::before', 'background-image: url("assets/img/body_design_2.png")');
    body.classList.add('dark-mode');
    body.style.background = 'linear-gradient(135deg, white,rgb(133, 53, 252))'; 
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundAttachment = 'fixed';
    copyrightSection.style.color= 'black';
    cardSections.forEach(cardSection => {
      cardSection.style.background='linear-gradient(135deg, rgb(173, 118, 255),rgb(133, 53, 252))';
    });
    skilltextSection.style.color= 'blue';
    worktextSection.style.color= 'blue';
    abouttextSection.style.color= 'blue';
    emailltextSection.style.color= 'blue';
    educationtextSection.style.color= 'blue';
    headerSections.forEach(headerSection => {
      headerSection.style.color= 'black';
      headerSection.style.border= '3px solid black';
    });
    container3Sections.style.background = 'rgb(133, 53, 252,0.6)';
    menubar.style.background= 'rgb(133, 53, 252,0.8)';
    tabletitles.forEach(tabletitle => {
      tabletitle.style.border='3px solid rgb(30, 13, 56)';
      tabletitle.style.color='rgb(30, 13, 56)';
    });
    document.querySelectorAll('input').forEach(inputElement => {
      inputElement.style.border = '3px solid rgb(30, 13, 56)';
      inputElement.style.background = 'rgb(30, 13, 56)';
      inputElement.style.color = 'white';
    });
    document.querySelectorAll('textarea').forEach(textareaElement => {
      textareaElement.style.border = '3px solid rgb(30, 13, 56)';
      textareaElement.style.background = 'rgb(30, 13, 56)';
      textareaElement.style.color = 'white';
    });
  }
}

//============================================================================ Music ======================================================================

function toggleMute() {
  var audio = document.getElementById('myAudio');
  var icon = document.querySelector('#playButton span i');
  
  if (audio.muted) {
    audio.play();
    audio.muted = false;
    icon.classList.remove('fa-volume-xmark');
    icon.classList.add('fa-volume-high');
  } else {
    
    audio.muted = true;
    icon.classList.remove('fa-volume-high');
    icon.classList.add('fa-volume-xmark');
  }
}

toggleMute();

//============================================================================ All transitions ======================================================================


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom <= 0 || 
    rect.top >= window.innerHeight || 
    rect.right <= 0 || 
    rect.left >= window.innerWidth
  );
}

function handleScroll() {
  const elements = document.querySelectorAll('.nkphoto,.abtme,.card,.nk2,.timecontainer ul li h3,.timecontainer ul li a,.timecontainer ul li p,.timecontainer ul li .date,.timecontainer,.lastcircle,.copyright,.contact-form tr,.logos,.wrapper2');

  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('slide-in');
      element.classList.remove('slide-in');
      element.style.visibility = 'visible';
    } else {
      element.classList.remove('slide-in');
      element.classList.add('slide-in');
      
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

//============================================================================ ==== ======================================================================
