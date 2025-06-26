let currentStep = 1;

function nextStep(step) {
  document.getElementById(`step-${step}`).classList.remove("active");
  currentStep++;
  document.getElementById(`step-${currentStep}`).classList.add("active");
}

function dashboardAccess() {
  alert("Welcome to your bidder dashboard!");
  window.location.href = "dashboard.html"; // Redirect to bidder dashboard
}

function formHandle(){
  const email = document.querySelector("")
}