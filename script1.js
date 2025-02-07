// Get the hamburger icon and the nav links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// When the hamburger is clicked, toggle the 'active' class on the nav links
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    // Get the current date
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear();
  
    // Set the target date (March 8th, 2025 at 12:00 AM)
    let targetDate = new Date("March 8, 2025 00:00:00").getTime();
  
    const countDown = targetDate,
          x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          // When the countdown reaches zero
          if (distance < 0) {
            document.getElementById("headline").innerText = "Today is the Day!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
        }, 0)
  }());
