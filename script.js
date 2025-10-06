//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("login-form");

// Check localStorage on load
window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    // Show "Login as existing user" button
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const remember = checkbox.checked;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Alert login
  alert(`Logged in as ${username}`);

  if (remember) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block";
  } else {
    // Remove any existing credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }

  // Reset form
  form.reset();
});

// Handle existing user login
existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
