// Sample high-value auction data (13 items)
const auctionItems = [
    { name: "Luxury Yacht", price: "$5,000,000", img: "/high value/yatch.jpg", roomLink: "index10.html" },
    { name: "Private Jet", price: "$10,000,000", img: "/high value/jet.jpg", roomLink: "index10.html" },
    { name: "Mansion in Beverly Hills", price: "$25,000,000", img: "/high value/mansion.jpg", roomLink: "index10.html" },
    { name: "Rare Painting by Picasso", price: "$15,000,000", img: "/high value/painting78.jpg", roomLink: "index10.html" },
    { name: "Gold Bar (100kg)", price: "$5,500,000", img: "/high value/gold.jpg", roomLink: "index10.html" },
    { name: "Exotic Sports Car", price: "$1,200,000", img: "/high value/mclaren.jpg", roomLink: "index10.html" },
    { name: "Diamond Necklace", price: "$3,000,000", img: "/high value/diamond necklace.jpg", roomLink: "index10.html" },
    { name: "Rare Antique Statue", price: "$2,500,000", img: "/high value/statue.jpg", roomLink: "index10.html" },
    { name: "Luxury Watch Collection", price: "$500,000", img: "/high value/watch.jpg", roomLink: "index10.html" },
    { name: "Private Iceland", price: "$50,000,000", img: "/high value/iceland.jpg", roomLink: "index10.html" },
    { name: "Famous Car Collection", price: "$10,000,000", img: "/high value/car collection.jpg", roomLink: "index10.html" },
    { name: "Historical Manuscript", price: "$4,000,000", img: "/high value/manuscript.jpg", roomLink: "index10.html" },
    { name: "Rare Gold Coins", price: "$600,000", img: "/high value/gold coin.jpg", roomLink: "index10.html" },
    { name: "Luxury Penthouse", price: "$8,000,000", img: "/high value/penthouse.jpg", roomLink: "index10.html" }
  ];
  
  // Dynamically load auction items
  function loadAuctionItems() {
    const auctionGrid = document.getElementById("auction-grid");
    auctionItems.forEach(item => {
      const auctionDiv = document.createElement("div");
      auctionDiv.classList.add("auction-item");
      auctionDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="item-name">${item.name}</div>
        <div class="item-price">Starting Bid: ${item.price}</div>
        <button class="room-button" onclick="goToRoom('${item.roomLink}')">Room</button>
      `;
      auctionGrid.appendChild(auctionDiv);
    });
  }
  
  // Redirect to bidding room
  function goToRoom(roomLink) {
    window.location.href = roomLink;
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", loadAuctionItems);
  