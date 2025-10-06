window.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");
  const form = document.getElementById("login-form");

  // Show "existing user" button if credentials exist
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const remember = checkbox.checked;

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    alert(`Logged in as ${username}`);

    if (remember) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "block";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }

    form.reset();
  });

  // Handle existing user login
  existingBtn.addEventListener("click", () => {
    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
      alert(`Logged in as ${savedUsername}`);
    }
  });
});
