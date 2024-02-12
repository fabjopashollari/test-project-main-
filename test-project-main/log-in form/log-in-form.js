const checkData = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("form3Example3").value;
    const passwordInput = document.getElementById("form3Example4").value;
    const errorEmailInput = document.getElementById("errorEmail");
    const errorPasswordInput = document.getElementById("errorPassword"); 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let isValid = true;

    errorEmailInput.innerText = "";
    errorPasswordInput.innerText = "";

    if (!emailRegex.test(emailInput)) {
        errorEmailInput.innerText = "Please enter a valid email!";
        errorEmailInput.style.color = "red"; 
        isValid = false;
    } 

    if (!passwordRegex.test(passwordInput)) {
        errorPasswordInput.innerText = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit";
        errorPasswordInput.style.color = "red";
        isValid = false;
    }

    if (isValid) {
        window.location.href= "../pages/home/home.html";
    }
    return isValid;
};
