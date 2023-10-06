document.addEventListener('DOMContentLoaded', () => {

  // typing 1
      const typed = new Typed(".typing-1", {
          strings: [
              "<span style='color:white'>Hi, my name is <strong style='color:white'>Nehal Khan</strong></span><br><span style='color:white'>I'm a</span>",
            ],
          typeSpeed: 70,
          showCursor: false
      });
  
  // typing 2
      setTimeout(() => {
      const typed2 = new Typed(".typing-2", {
        strings: [
          "<span style='color:black'> Programmer</span>",
          "<span style='color:black'> Artist</span>",
          "<span style='color:black'> leader</span>",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
    }, 4000);

});
  