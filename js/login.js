document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userpass = document.getElementById('user-pass');
    const pass = userpass.value;

    if (email === "baperboro@pola.com" && pass === "baperboropola") {
        window.location.href = "dashboard.html";
    }
    else {
        alert("Please input correct email and password");
    }
})