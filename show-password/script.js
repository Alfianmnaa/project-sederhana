// Show Password
const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.classList.remove("fa-eye-slash");
    togglePasswordButton.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    togglePasswordButton.classList.remove("fa-eye");
    togglePasswordButton.classList.add("fa-eye-slash");
  }
});
