const contactUsData = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("email").value; // Corrected ID here
    const errorEmailInput = document.getElementById("errorEmail");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    errorEmailInput.innerText = "";

    if (!emailRegex.test(emailInput)) {
        errorEmailInput.innerText = "Please enter a valid email!";
        errorEmailInput.style.color = "red"; 
        return false;
    }
}
