// Sample mid-value auction data (14 items)
const auctionItems = [
    { name: "Silver Necklace", price: "$100", img: "/mid value/silver necklace.jpg", roomLink: "index10.html" },
    { name: "Vintage Camera", price: "$150", img: "/mid value/vintage camera.jpg", roomLink: "index10.html" },
    { name: "Designer Handbag", price: "$180", img: "/mid value/designer bag.jpg", roomLink: "index10.html" },
    { name: "Luxury Watch", price: "$200", img: "/mid value/luxary watch.avif", roomLink: "index10.html" },
    // { name: "Vintage Lamp", price: "$120", img: "/mid value/", roomLink: "index10.html" },
    { name: "Gold Ring", price: "$250", img: "/mid value/112-gold-ring-png.png", roomLink: "index10.html" },
    { name: "Classic Art Print", price: "$140", img: "/mid value/classic painting.jpeg.jpg", roomLink: "index10.html" },
    // { name: "Antique Vase", price: "$220", img: "/mid value/", roomLink: "index10.html" },
    { name: "Leather Jacket", price: "$180", img: "/mid value/leather jacket.jpg", roomLink: "index10.html" },
    { name: "Porcelain Figurine", price: "$160", img: "/mid value/ACAR.jpg", roomLink: "index10.html" },
    { name: "Designer Sunglasses", price: "$130", img: "/mid value/desiner sunglasses.webp", roomLink: "index10.html" },
    // { name: "Antique Clock", price: "$210", img: "/mid value/", roomLink: "index10.html" },
    { name: "Handmade Sculpture", price: "$230", img: "/mid value/handmade sculpture.webp", roomLink: "index10.html" },
    { name: "Vintage Chair", price: "$190", img: "/mid value/vintage chair.jpeg.jpg", roomLink: "index10.html" },
    // { name: "Gold-Plated Cufflinks", price: "$170", img: "/mid value/", roomLink: "index10.html" },
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
  