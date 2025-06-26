// Sample low value auction data (12 items)
const auctionItems = [
    { name: "Vintage Watch", price: "$50", img: "/low value/vintage watch.jpg", roomLink: "index10.html" },
    { name: "Antique Necklace", price: "$40", img: "/low value/antique  necklace.jpg", roomLink: "index10.html" },
    { name: "Leather Blet", price: "$30", img: "/low value/leather belt.jpg", roomLink: "index10.html" },
    { name: "Classic Sunglasses", price: "$25", img: "/low value/classic sunglasses.jpg", roomLink: "index10.html" },
    { name: "Designer Keychain", price: "$20", img: "/low value/designer keychain.webp", roomLink: "index10.html" },
    { name: "Sports Cap", price: "$15", img: "/low value/sports cap.jpg", roomLink: "index10.html" },
    { name: "Graphic T-shirt", price: "$35", img: "/low value/graphic tshirt.webp", roomLink: "index10.html" },
    { name: "Vintage Pin", price: "$10", img: "/low value/vintage pin.avif", roomLink: "index10.html" },
    { name: "Handmade Bracelet", price: "$18", img: "/low value/handmade bracelet.jpg", roomLink: "index10.html" },
    { name: "Custom Mug", price: "$12", img: "/low value/custom mug.jpg", roomLink: "index10.html" },
    { name: "Vintage Poster", price: "$28", img: "/low value/vintage poster.avif", roomLink: "index10.html" },
    { name: "Decorative Plate", price: "$22", img: "/low value/decorative plate.jpg", roomLink: "index10.html" },
    { name: "Art Print", price: "$40", img: "/low value/art print.webp", roomLink: "index10.html" },
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
  