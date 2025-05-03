// ======================================================= nav ================================================================

function togglenav() {
    const nav2 = document.querySelector(".nav2");
    if (nav2.style.display === 'flex'){
        nav2.style.display = 'none';
    }
    else{
        nav2.style.display = 'flex';
    }   
}

window.addEventListener('scroll', homeanimation5);
window.addEventListener('load', homeanimation5);

const sections = document.querySelectorAll('.home, .about, .skills, .achievement, .project, .contact');
const navLinks = document.querySelectorAll('.nav-list li a, .nav-list2 li a');

function updateActiveNav() {
    let currentSectionId = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);


// ====================================================== Home ====================================================================

var option1 = {
    strings: [
        "<span style='color:blue';>def</span> <span style='color:gold';>me():</span><br><p>life <span style='color:white';>=</span> <span style='color:gold';>code()</span> <span style='color:white';>+</span> <span style='color:gold';>soul(</span><span style='color:white';>'Nehal'</span><span style='color:yellow';>)</span></p><p><span style='color:#C11C84';>return</span> life</p><br>life <span style='color:white';>=</span> <span style='color:gold';>me()</span><br><span style='color:gold';>print(</span>life<span style='color:gold';>)</span>"
    ],
    typeSpeed: 20,  
    backSpeed: 20,   
    startDelay: 100,        
    backDelay: 500,       
    showCursor: false, 
    loop: true     
};
var typed = new Typed(".t1", option1);


var option2 = {
    strings: [
        "<span style='color:white';>Name:</span> Nehal Khan<br><span style='color:white';>Nickname:</span> Code Blooded<br><span style='color:white';>Status:</span> A soul driven by code"
    ],
    typeSpeed: 20,  
    backSpeed: 20,   
    startDelay: 100,        
    backDelay: 500,       
    showCursor: false, 
    loop: false     
};

function runcode() {
    const nkpht = document.querySelector(".nehal-photo-1");
    const typ1 = document.querySelector(".t1");
    const typ2 = document.querySelector(".t2");
    const faply = document.querySelector(".fa-play");

    nkpht.style.display = 'block';
    typ2.style.display = 'block';
    typ1.style.display = 'none';
    faply.style.display = 'none';

    var typed2 = new Typed(".t2", option2);

    setTimeout(() => {
        nkpht.style.display = 'none';
        typ2.style.display = 'none';
        typ1.style.display = 'block';
        faply.style.display = 'block';
        typed2.destroy();
        typed.destroy();
        var typed = new Typed(".t1", option1);
      }, 5000);
}

// ======================================================= Achivement =============================================================

let currentIndex = 0;
let totalCards = document.querySelectorAll('.card').length;
let interval;

const cards = document.querySelectorAll('.card');
const circleContainer = document.querySelector('.circle-indexx-container');
const leftArrows = document.querySelectorAll('.arr-left');
const rightArrows = document.querySelectorAll('.arr-right');

// Create circle indicators dynamically based on total cards
for (let i = 0; i < totalCards; i++) {
  const circle = document.createElement('div');
  circle.classList.add('circle-indexx');
  circleContainer.appendChild(circle);
}

const circleIndicators = document.querySelectorAll('.circle-indexx');

// Function to show the current card
function showCard(index, lorr) {
  cards.forEach(card => card.style.display = 'none');
  cards[index].style.display = 'flex';

  if (lorr === 'l'){lefttorightcardanimation(index);}
  else{righttoleftcardanimation(index)}

  circleIndicators.forEach((circle, i) => {
    circle.style.backgroundColor = (i === index) ? 'rgb(133, 53, 252)' : '#bdbbbb';
  });
}

function lefttorightcardanimation(index) {
    cards[index].classList.remove('cardslide-in-right'); // Remove opposite animation
    cards[index].classList.remove('cardslide-in-left');  // Remove previous if exists
    void cards[index].offsetWidth; // Trigger reflow (important to restart animation)
    cards[index].classList.add('cardslide-in-left');
}

function righttoleftcardanimation(index) {
    cards[index].classList.remove('cardslide-in-left'); // Remove opposite animation
    cards[index].classList.remove('cardslide-in-right'); 
    void cards[index].offsetWidth; // Trigger reflow
    cards[index].classList.add('cardslide-in-right');
}

// Automatic sliding function
function autoSlide() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalCards;
    lorr = 'r'
    showCard(currentIndex, lorr);
  }, 3000);
}

// Stop automatic sliding on hover
function stopAutoSlide() {
  clearInterval(interval);
}

// Resume automatic sliding
function resumeAutoSlide() {
  clearInterval(interval);
  autoSlide();
}

// Manual navigation with left arrows
leftArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    showCard(currentIndex, 'l');
    resumeAutoSlide();
  });

  arrow.addEventListener('mouseenter', stopAutoSlide);
  arrow.addEventListener('mouseleave', resumeAutoSlide);
});

// Manual navigation with right arrows
rightArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex + 1) % totalCards;
    showCard(currentIndex, 'r');
    resumeAutoSlide();
  });

  arrow.addEventListener('mouseenter', stopAutoSlide);
  arrow.addEventListener('mouseleave', resumeAutoSlide);
});

// Pause on card hover
cards.forEach(card => {
  card.addEventListener('mouseenter', stopAutoSlide);
  card.addEventListener('mouseleave', resumeAutoSlide);
});

// Initialize the carousel
showCard(currentIndex, 'r');
autoSlide();


// ======================================================= Project ================================================================

function toggleonproject() {
    const hme = document.getElementById("home");
    const abt = document.getElementById("about");
    const cnt = document.getElementById("contact");
    const prj = document.getElementById("project");
    const ac = document.getElementById("achievement");

    hme.style.display = 'none';
    abt.style.display = 'none';
    cnt.style.display = 'none';
    ac.style.display = 'none';
    prj.style.display = 'flex';
    
}

function toggleoffproject() {
    const hme = document.getElementById("home");
    const abt = document.getElementById("about");
    const cnt = document.getElementById("contact");
    const prj = document.getElementById("project");
    const ac = document.getElementById("achievement");

    hme.style.display = 'flex';
    abt.style.display = 'flex';
    cnt.style.display = 'flex';
    ac.style.display = 'flex';
    prj.style.display = 'none';

}

// ======================================================= Image Open ================================================================

const images = document.querySelectorAll('.work-photos img, .card img');

images.forEach(img => {
  img.addEventListener('click', (e) => {
    window.open(e.target.src, '_blank');
  });
});


// ====================================================== SUN MOON ================================================================

function toggleTheme() {
    const body = document.body;
    const navbaricon = document.querySelector(".fa-bars");
    const icon = document.querySelectorAll(".theme-icon");
    const block1 = document.querySelector(".block1");
    const block2 = document.querySelector(".block2");
    const nehal_name = document.querySelector(".nehal-name");
    const khan_name = document.querySelector(".khan-name");
    const tagline = document.querySelector(".tagline");
    const faicon_a = document.querySelectorAll(".faicon a");

    const about_title = document.querySelector(".about-title");
    const about_intro = document.querySelector(".about-intro p");
    const nehal_photo_2 = document.querySelector(".nehal-photo-2")

    const grids = document.querySelectorAll(".grids");
    const grids_title = document.querySelectorAll(".grids p:nth-child(1)");
    const grids_a = document.querySelectorAll(".grids a");

    const skill_title = document.querySelector(".skill-title");
    const skul = document.querySelectorAll(".skul");
    const sklist = document.querySelectorAll(".sklist");

    const ach_abt = document.querySelectorAll(".ach-abt")
    const card = document.querySelectorAll(".card")

    const project_title = document.querySelector(".project-title");
    const work = document.querySelectorAll(".work");

    const my_email = document.querySelector(".my_email")
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        icon.forEach(inputElement => {
            inputElement.classList.remove("fa-sun");
            inputElement.classList.add("fa-moon");
        });

        //Home
        body.style.backgroundColor = 'white'; 
        navbaricon.style.color = 'black'; 
        block1.style.backgroundColor = 'rgb(246, 246, 246)';
        block2.style.backgroundColor = 'rgb(246, 246, 246)';
        nehal_name.style.color = 'rgb(151, 34, 252)';
        khan_name.style.color = 'rgb(151, 34, 252)';
        tagline.style.color = 'black';
        faicon_a.forEach(inputElement => {
            inputElement.style.color = "black";
        });
        faicon_a.forEach(inputElement => {
            inputElement.addEventListener("mouseenter", () => {
                inputElement.style.color = "rgb(151, 34, 252)";
            });
            inputElement.addEventListener("mouseleave", () => {
                inputElement.style.color = "black";
            });
        });

        //About
        about_title.style.color = 'black';
        about_intro.style.color = 'black';
        nehal_photo_2.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.5)";

        //Experience
        grids.forEach(inputElement => {
            inputElement.style.backgroundColor = "white";
            inputElement.style.color = "black";
            inputElement.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.5)";
        });
        grids_title.forEach(inputElement => {
            inputElement.style.backgroundColor = "rgb(151, 34, 252)";
            inputElement.style.color = "white";
        });
        grids_a.forEach(inputElement => {
            inputElement.style.color = "rgb(151, 34, 252)";
        });

        //Skill
        skill_title.style.color = 'black';
        skul.forEach(inputElement => {
            inputElement.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.5)";
        });
        sklist.forEach(inputElement => {
            inputElement.style.backgroundColor = "white";
            inputElement.style.color = "black";
        });

        //achievement
        card.forEach(inputElement => {
            inputElement.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.5)";
        });
        ach_abt.forEach(inputElement => {
            inputElement.style.color = 'black';
            inputElement.style.backgroundColor = "white";
        });

        //project
        project_title.style.color = "black";
        work.forEach(inputElement => {
            inputElement.style.color = 'black';
            inputElement.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.5)";
            inputElement.style.backgroundColor = "rgb(151, 34, 252)";
        });

        //Contact
        my_email.style.color = "black";
    } 
    
    else {
        body.classList.add('dark-mode');
        icon.forEach(inputElement => {
            inputElement.classList.add("fa-sun");
            inputElement.classList.remove("fa-moon");
        });

        //Home
        body.style.backgroundColor = 'rgb(32, 8, 53)'; 
        navbaricon.style.color = 'white'; 
        block1.style.backgroundColor = 'rgb(31, 8, 51)';
        block2.style.backgroundColor = 'rgb(31, 8, 51)';
        nehal_name.style.color = 'rgb(203, 149, 250)';
        khan_name.style.color = 'rgb(218, 185, 247)';
        tagline.style.color = 'white';
        faicon_a.forEach(inputElement => {
                inputElement.style.color = "rgb(203, 149, 250)";
        });
        faicon_a.forEach(inputElement => {
            inputElement.addEventListener("mouseenter", () => {
                inputElement.style.color = "white";
            });
            inputElement.addEventListener("mouseleave", () => {
                inputElement.style.color = "rgb(203, 149, 250)";
            });
        });

        //About
        about_title.style.color = 'rgb(203, 149, 250)';
        about_intro.style.color = 'rgb(233, 213, 251)';
        nehal_photo_2.style.boxShadow = "4px 4px 8px rgb(0, 0, 0)";

        //Experience
        grids.forEach(inputElement => {
            inputElement.style.backgroundColor = "rgb(46, 12, 76)";
            inputElement.style.color = "white";
            inputElement.style.boxShadow = "4px 4px 8px rgb(0, 0, 0)";
        });
        grids_title.forEach(inputElement => {
            inputElement.style.backgroundColor = "rgb(169, 71, 255)";
            inputElement.style.color = "black";
        });
        grids_a.forEach(inputElement => {
            inputElement.style.color = "rgb(151, 34, 252)";
        });

        //Skill
        skill_title.style.color = 'rgb(203, 149, 250)';
        skul.forEach(inputElement => {
            inputElement.style.boxShadow = "4px 4px 10px rgb(0, 0, 0)";
        });
        sklist.forEach(inputElement => {
            inputElement.style.backgroundColor = "rgb(46, 12, 76)";
            inputElement.style.color = "rgb(233, 213, 251)";
        });

        //achievement
        card.forEach(inputElement => {
            inputElement.style.boxShadow = "4px 4px 10px rgb(0, 0, 0)";
        });
        ach_abt.forEach(inputElement => {
            inputElement.style.color = 'black';
            inputElement.style.backgroundColor = "rgb(220, 182, 253)";
        });

        //project
        project_title.style.color = "white";
        work.forEach(inputElement => {
            inputElement.style.boxShadow = "4px 4px 10px rgb(0, 0, 0)";
            inputElement.style.backgroundColor = "rgb(84, 20, 141)";
        });

        //Contact
        my_email.style.color = "white";
    }
  }

//=========================================================== All transitions =========================================================

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom <= 0 || 
        rect.top >= window.innerHeight || 
        rect.right <= 0 || 
        rect.left >= window.innerWidth
    );
}

function handleScrolltop() {
    const elements = document.querySelectorAll('.grids, .skul');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('slide-in-top');
            element.classList.remove('slide-in-top');
            element.style.visibility = 'visible';
        } else {
            element.classList.remove('slide-in-top');
            element.classList.add('slide-in-top');
        }
      });
}
window.addEventListener('scroll', handleScrolltop);
window.addEventListener('load', handleScrolltop);

function handleScrollleft() {
    const elements = document.querySelectorAll('.about-intro');
    elements.forEach(element => {
    if (isInViewport(element)) {
        element.classList.add('slide-in-left');
        element.classList.remove('slide-in-left');
        element.style.visibility = 'visible';
    } else {
        element.classList.remove('slide-in-left');
        element.classList.add('slide-in-left');
    }
    });
}
window.addEventListener('scroll', handleScrollleft);
window.addEventListener('load', handleScrollleft);

function handleScrollright() {
    const elements = document.querySelectorAll('.nehal-photo-2, input, textarea');
    elements.forEach(element => {
    if (isInViewport(element)) {
        element.classList.add('slide-in-right');
        element.classList.remove('slide-in-right');
        element.style.visibility = 'visible';
    } else {
        element.classList.remove('slide-in-right');
        element.classList.add('slide-in-right');
    }
    });
}
window.addEventListener('scroll', handleScrollright);
window.addEventListener('load', handleScrollright);

function homeanimation1() {
    const elements = document.querySelectorAll('.typing');
    elements.forEach(element => {
    if (isInViewport(element)) {
        element.classList.add('rtol');
        element.classList.remove('rtol');
        element.style.visibility = 'visible';
    } else {
        element.classList.remove('rtol');
        element.classList.add('rtol');
    }
    });
}
window.addEventListener('scroll', homeanimation1);
window.addEventListener('load', homeanimation1);

function homeanimation2() {
    const elements = document.querySelectorAll('.nehal-name');
    elements.forEach(element => {
    if (isInViewport(element)) {
        element.classList.add('ttob');
        element.classList.remove('ttob');
        element.style.visibility = 'visible';
    } else {
        element.classList.remove('ttob');
        element.classList.add('ttob');
    }
    });
}
window.addEventListener('scroll', homeanimation2);
window.addEventListener('load', homeanimation2);

function homeanimation3() {
    const elements = document.querySelectorAll('.khan-name');
    elements.forEach(element => {
    if (isInViewport(element)) {
        element.classList.add('btot');
        element.classList.remove('btot');
        element.style.visibility = 'visible';
    } else {
        element.classList.remove('btot');
        element.classList.add('btot');
    }
    });
}
window.addEventListener('scroll', homeanimation3);
window.addEventListener('load', homeanimation3);

function homeanimation4() {
    const elements = document.querySelectorAll('.tagline');
    elements.forEach(element => {
    if (isInViewport(element)) {
        element.classList.add('ltor');
        element.classList.remove('ltor');
        element.style.visibility = 'visible';
    } else {
        element.classList.remove('ltor');
        element.classList.add('ltor');
    }
    });
}
window.addEventListener('scroll', homeanimation4);
window.addEventListener('load', homeanimation4);

function homeanimation5() {
    const elements = document.querySelectorAll('.faicon');
    elements.forEach(element => {
    if (isInViewport(element)) {
        element.classList.add('btot2');
        element.classList.remove('btot2');
        element.style.visibility = 'visible';
    } else {
        element.classList.remove('btot2');
        element.classList.add('btot2');
    }
    });
}
