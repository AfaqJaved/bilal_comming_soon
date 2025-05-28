lucide.createIcons();

document.getElementById("year").textContent = new Date().getFullYear();

const emailInput = document.getElementById("email");
const form = document.getElementById("notifyForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value;
  console.log("Submitted email:", email);

  submitBtn.textContent = "Thank you!";
  submitBtn.classList.add("thank-you");
  emailInput.value = "";

  setTimeout(() => {
    submitBtn.innerHTML = 'Notify me <i data-lucide="arrow-right"></i>';
    lucide.createIcons();
    submitBtn.classList.remove("thank-you");
  }, 3000);
});

const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
