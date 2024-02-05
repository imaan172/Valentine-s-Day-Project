document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.querySelector(".button1");
    const button2 = document.querySelector(".button2");
    const yesButtonContent = document.querySelector(".yes-button-content");
    const mainContainer = document.querySelector(".main-container");
  
    let clickCount = 0;

    button1.addEventListener("click", function () {
        button2.style.display = "none";
        mainContainer.style.display = "none";
        yesButtonContent.style.display= "flex";
    })
  
    button2.addEventListener("click", function () {
      // Change wording on button2
      const messages = ["Wrong Button", "Oops, Wrong Button again", "You meant yes", "Oh, come on pookie", "Don't be like that",
    "You're breaking my heart"];
      button2.textContent = messages[clickCount % messages.length];
      clickCount++;
  
      // Increase size of button1
      const currentWidth = parseInt(window.getComputedStyle(button1).width);
      const currentHeight = parseInt(window.getComputedStyle(button1).height);
      
      button1.style.width = currentWidth * 1.5 + "px";
      button1.style.height = currentHeight * 1.5 + "px";
  
      // Check if button1 has taken over the entire screen
      if (currentWidth * 1.5 >= window.innerWidth || currentHeight * 1.5 >= window.innerHeight) {
      }
    });
  });


  