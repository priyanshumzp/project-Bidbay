// Sample jewelry data
const jewelryItems = [
    { name: "Gold Necklace", price: "$500", img: "/jewelry/gold jewellery.jpg", roomLink: "index10.html" },
    { name: "Diamond Ring", price: "$1,200", img: "/jewelry/diamond ring.jpg", roomLink: "index10.html" },
    { name: "Silver Earrings", price: "$300", img: "/jewelry/silver earing.png", roomLink: "index10.html" },
    { name: "Ruby Pendant", price: "$800", img: "/jewelry/ruby pendant.webp", roomLink: "index10.html" },
    { name: "Pearl Bracelet", price: "$600", img: "/jewelry/pearl bracelet.avif", roomLink: "index10.html" },
    { name: "Emerald Brooch", price: "$1,000", img: "/jewelry/emerald broch.jpg", roomLink: "index10.html" },
    { name: "Gold Bangles", price: "$700", img: "/jewelry/gold bangels.webp", roomLink: "index10.html" },
    { name: "Sapphire Earrings", price: "$950", img: "/jewelry/sapphire earing.jpg", roomLink: "index10.html" },
    { name: "Platinum Ring", price: "$1,500", img: "/jewelry/platinum ring.webp", roomLink: "index10.html" },
    { name: "Opal Necklace", price: "$850", img: "/jewelry/opal necklace.webp", roomLink: "index10.html" },
    { name: "Amethyst Pendant", price: "$400", img: "/jewelry/amethyst pendant.webp", roomLink: "index10.html" },
    { name: "Topaz Bracelet", price: "$550", img: "/jewelry/topaj bracelet.jpeg.jpg", roomLink: "index10.html" },
    { name: "Gold Chain", price: "$480", img: "/jewelry/gold chain.jpg", roomLink: "index10.html" },
    { name: "Diamond Brooch", price: "$2,000", img: "/jewelry/diamond brooch.jpg", roomLink: "index10.html" },
    { name: "Ruby Ring", price: "$1,100", img: "/jewelry/ruby ring.webp", roomLink: "index10.html" },
  ];
  
  // Dynamically load jewelry items
  function loadJewelryItems() {
    const jewelryGrid = document.getElementById("jewelry-grid");
    jewelryItems.forEach(item => {
      const jewelryDiv = document.createElement("div");
      jewelryDiv.classList.add("jewelry-item");
      jewelryDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="jewelry-name">${item.name}</div>
        <div class="jewelry-price">Starting Bid: ${item.price}</div>
        <button class="jewelry-button" onclick="goToRoom('${item.roomLink}')">Room</button>
      `;
      jewelryGrid.appendChild(jewelryDiv);
    });
  }
  
  // Redirect to bidding room
  function goToRoom(roomLink) {
    window.location.href = roomLink;
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", loadJewelryItems);
  