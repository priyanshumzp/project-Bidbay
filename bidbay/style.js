let user1BidCount = 0;
let user2BidCount = 0;

const user1BidButton = document.getElementById("user1-bid");
const user2BidButton = document.getElementById("user2-bid");
const winnerDisplay = document.querySelector(".winner");

user1BidButton.addEventListener("click", () => {
  user1BidCount++;
  updateWinner();
});

user2BidButton.addEventListener("click", () => {
  user2BidCount++;
  updateWinner();
});

function updateWinner() {
  if (user1BidCount > user2BidCount) {
    winnerDisplay.textContent = "WINNER: USER - 1";
  } else if (user2BidCount > user1BidCount) {
    winnerDisplay.textContent = "WINNER: USER - 2";
  } else {
    winnerDisplay.textContent = "";
  }
}

// Get modal elements
const card = document.getElementById("card");
const paymentModal = document.getElementById("paymentModal");
const closeModal = document.getElementById("closeModal");
const paymentForm = document.getElementById("paymentForm");

// Show modal when card is clicked
card.addEventListener("click", () => {
  paymentModal.style.display = "flex";
});

// Hide modal when close button is clicked
closeModal.addEventListener("click", () => {
  paymentModal.style.display = "none";
});

// Hide modal when clicking outside modal content
window.addEventListener("click", (event) => {
  if (event.target === paymentModal) {
    paymentModal.style.display = "none";
  }
});

// Handle payment form submission
paymentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  alert("Payment Successful!");
  paymentModal.style.display = "none";
  // You can integrate actual payment gateway API calls here
});// MetaMask integration
const connectWalletButton = document.getElementById("connectWalletButton");
const walletAddressDisplay = document.getElementById("walletAddress");

async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      walletAddressDisplay.textContent = `Connected: ${accounts[0]}`;
    } catch (error) {
      console.error("Error connecting to MetaMask", error);
    }
  } else {
    alert("MetaMask is not installed");
  }
}

connectWalletButton.addEventListener("click", connectWallet);


