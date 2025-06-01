const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}


  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevents page refresh
    const name = document.getElementById("name").value;
    alert("Thanks for submitting, " + name + "!");
    // You could also send this to a server or API here
  });

