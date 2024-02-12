const forgotEmail = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("typeEmail").value;
    const errorMsg = document.getElementById("errorEmail");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    errorMsg.innerText = "";
    if (!emailRegex.test(emailInput)) {
        errorMsg.innerText = "Please enter a valid email!";
        errorMsg.style.color = "red"; 
        return false;
    } else {
        // Heqja e mesazhit të gabimit kur emaili është i vlefshëm
        errorMsg.innerText = "";
        return true;
    }
};
