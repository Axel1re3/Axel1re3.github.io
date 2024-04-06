const homeButton = document.getElementById("home-button"); 
const aboutButton = document.getElementById("about-button"); 
const servicesButton = document.getElementById("experience-button"); 
const contactButton = document.getElementById("contact-button"); 
homeButton.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); }); 
aboutButton.addEventListener("click", () => { window.scrollTo({ top: 600, behavior: "smooth" }); }); 
servicesButton.addEventListener("click", () => { window.scrollTo({ top: 2220, behavior: "smooth" }); }); 
contactButton.addEventListener("click", () => { window.scrollTo({ top: 100000, behavior: "smooth" }); });
document.getElementById("openPdfButton").addEventListener("click", function() {
    window.open("Resume Dmytro.pdf", "_blank");
});
