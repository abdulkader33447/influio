const passwords = document.querySelectorAll(".password");

function showPassword(item) {
  const showPasswordButton = item.querySelector(".show-password");
  const icon = item.querySelector(".icon");
  const passwordField = item.querySelector(".password-field");
  showPasswordButton.addEventListener("click", () => {
    if (icon.classList.contains("ph-eye")) {
      icon.classList.remove("ph-eye");
      icon.classList.add("ph-eye-slash");
      passwordField.setAttribute("type", "password");
    } else {
      icon.classList.add("ph-eye");
      icon.classList.remove("ph-eye-slash");
      passwordField.setAttribute("type", "text");
    }
  });
}

passwords.forEach((item) => {
  showPassword(item);
});
