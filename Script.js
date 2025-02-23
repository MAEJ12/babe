  alert('Hello Friends Welcome to CHOOSE LIFE CAMPAIGN!');
  console.log('Hello Friends Welcome to CHOOSE LIFE CAMPAIGN!');
  
  document.addEventListener("DOMContentLoaded", function() {
  
      const learnMoreButtons = document.querySelectorAll('.learn-more');                  
      learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
          const targetId = this.getAttribute('data-target');
          const moreContent = document.getElementById(targetId);
          if (moreContent.style.display === "none" || moreContent.style.display === "") {
            moreContent.style.display = "block";
            this.textContent = "Show Less";
          } else {
            moreContent.style.display = "none";
            // Restore original button text depending on section
            this.textContent = this.getAttribute('data-target') === 'contact-more' ? "Get Help" : "Learn More";
          }
        });
      });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const learnMoreButtons = document.querySelectorAll(".learn-more");
  
    learnMoreButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const moreContent = document.getElementById(targetId);
  
        if (moreContent) {
          if (moreContent.style.display === "none" || moreContent.style.display === "") {
            moreContent.style.display = "block";
            this.textContent = "Show Less";
          } else {
            moreContent.style.display = "none";
            this.textContent = "Learn More";
          }
        }
      });
    });
  });

