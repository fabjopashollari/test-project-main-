const registerData = (event) =>{
    event.preventDefault();
    const emailInput = document.getElementById("form3Example3c").value;
    const passwordInput = document.getElementById("form3Example4c").value;
    const repeatPasswordInput = document.getElementById("form3Example4cd").value;
    const errorEmailInput = document.getElementById("errorEmail");
    const errorPasswordInput= document.getElementById("errorPassword");
    const errorRepeatPasswordInput = document.getElementById("errorRepeatPassword");

    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    errorEmailInput.innerText= "";
    errorPasswordInput.innerText="";
    errorRepeatPasswordInput.innerText="";
    let isValid= true;

    if (!emailRegex.test(emailInput)) {
        errorEmailInput.innerText="Please enter a valid email!";
        errorEmailInput.style.color = "red"; 
        isValid = false;
    }

    if (!passwordRegex.test(passwordInput)) {
        errorPasswordInput.innerText= "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit";
        errorPasswordInput.style.color = "red";
        isValid = false;
    }

    if (passwordInput !== repeatPasswordInput) {
        errorRepeatPasswordInput.innerText = "Passwords do not match.";
        errorRepeatPasswordInput.style.color = "red";
        isValid = false;
    }

    if (isValid) {
        window.location.href = "../pages/home/home.html";
    }

    return isValid;
}
