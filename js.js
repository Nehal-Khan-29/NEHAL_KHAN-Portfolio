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
  
