// Auction data with multiple items having different statuses
const auctionItems = [
    { name: "Luxury Watch", status: "Active", biddingRoomLink: "index10.html" },
    { name: "Diamond Necklace", status: "Active", biddingRoomLink: "index10.html" },
    { name: "Sports Car", status: "Active", biddingRoomLink: "index10.html" },
    { name: "Rare Art Piece", status: "Active", biddingRoomLink: "index10.html" },
    { name: "Private Jet", status: "Active", biddingRoomLink: "index10.html" },
    { name: "Luxury Villa", status: "Completed", biddingRoomLink: "" },
    { name: "Antique Vase", status: "Completed", biddingRoomLink: "" },
    { name: "Gold Coins", status: "Completed", biddingRoomLink: "" },
    { name: "Exotic Sports Car", status: "Ended", biddingRoomLink: "" },
    { name: "Private Island", status: "Ended", biddingRoomLink: "" },
    { name: "Mansion in Beverly Hills", status: "Ended", biddingRoomLink: "" },
  ];
  
  // Function to display auction status and button (if the auction is active)
  function displayAuctionStatus() {
    const auctionStatusContainer = document.getElementById("auction-status-container");
    auctionStatusContainer.innerHTML = ''; // Clear any previous content
  
    auctionItems.forEach(item => {
      let statusText = '';
      let buttonHTML = '';
  
      // Display appropriate message based on auction status
      if (item.status === "Active") {
        statusText = `The auction for "${item.name}" is ongoing.`;
        buttonHTML = `<button class="go-to-room-button" onclick="goToBiddingRoom('${item.biddingRoomLink}')">Go to Bidding Room</button>`;
      } else if (item.status === "Ended") {
        statusText = `The auction for "${item.name}" has ended.`;
      } else if (item.status === "Completed") {
        statusText = `The auction for "${item.name}" is completed.`;
      }
  
      // Create auction item div and append it to the container
      const auctionDiv = document.createElement("div");
      auctionDiv.classList.add("auction-item");
      auctionDiv.innerHTML = `
        <p class="auction-status">${statusText}</p>
        ${buttonHTML}
      `;
      auctionStatusContainer.appendChild(auctionDiv);
    });
  }
  
  // Redirect to the bidding room
  function goToBiddingRoom(roomLink) {
    window.location.href = roomLink;
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", displayAuctionStatus);
  