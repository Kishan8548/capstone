document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailOrPhone = document.getElementById("emailPhone");
  const password = document.getElementById("password");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    [emailOrPhone, password].forEach(input => {
      input.classList.remove("invalid", "shake");
    });

    const value = emailOrPhone.value.trim();
    if (value === "" || (!emailPattern.test(value) && isNaN(value))) {
      showError(emailOrPhone);
      valid = false;
    }

    if (password.value.trim() === "") {
      showError(password);
      valid = false;
    }

    if (valid) {
        
      window.location.href = "index.html";
    }
  });

  function showError(input) {
    input.classList.add("invalid", "shake");
    input.addEventListener("animationend", () => {
      input.classList.remove("shake");
    }, { once: true });
  }
});
