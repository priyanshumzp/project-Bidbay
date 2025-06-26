// Sample house data
const houseItems = [
    { name: "Luxury Villa", price: "$5,000,000", img: "/house/luxury villa.jpg", roomLink: "index10.html" },
    { name: "Modern Apartment", price: "$1,500,000", img: "/house/modern apartment.jpg", roomLink: "index10.html" },
    { name: "Beach House", price: "$3,200,000", img: "/house/beach-house-.jpg", roomLink: "index10.html" },
    { name: "City Penthouse", price: "$4,000,000", img: "/house/city pent house.jpg", roomLink: "index10.html" },
    { name: "Countryside Estate", price: "$2,800,000", img: "/house/countryside estate.jpg", roomLink: "index10.html" },
    { name: "Luxury Mansion", price: "$6,500,000", img: "/house/luxurious mansion.jpg", roomLink: "index10.html" },
    { name: "Contemporary House", price: "$2,000,000", img: "/house/contemporary house.webp", roomLink: "index10.html" },
    { name: "Suburban Home", price: "$750,000", img: "/house/house.jpeg", roomLink: "index10.html" },
    { name: "Lakefront Property", price: "$3,500,000", img: "/house/lakefront property.jpg", roomLink: "index10.html" },
    { name: "Mountain Retreat", price: "$2,400,000", img: "/house/mountain retreat.jpg", roomLink: "index10.html" },
    { name: "Urban Loft", price: "$1,200,000", img: "/house/urban loft.png", roomLink: "index10.html" },
    { name: "Rural Cottage", price: "$600,000", img: "/house/rural cottage.jpg", roomLink: "index10.html" },
    { name: "Designer Apartment", price: "$1,800,000", img: "/house/designer apartment.jpeg", roomLink: "index10.html" },
    { name: "Grand Manor", price: "$7,000,000", img: "/house/grand manor.jpg", roomLink: "index10.html" },
    { name: "Beachfront Villa", price: "$4,500,000", img: "/house/beachfront villa.jpg", roomLink: "index10.html" },
    { name: "Modern Bungalow", price: "$1,100,000", img: "/house/modern bunglow.jpg", roomLink: "index10.html" },
    { name: "Luxury Condo", price: "$2,200,000", img: "/house/luxry .jpg", roomLink: "index10.html" },
    { name: "Private Island Home", price: "$8,000,000", img: "/house/private iceland home.jpg", roomLink: "index10.html" },
    { name: "Historical Mansion", price: "$9,500,000", img: "/house/historical mansion.jpeg", roomLink: "index10.html" },
    { name: "Mountain View Villa", price: "$2,750,000", img: "/house/mountain view villa.jpg", roomLink: "index10.html" },
  ];
  
  // Dynamically load house items
  function loadHouseItems() {
    const housesGrid = document.getElementById("houses-grid");
    houseItems.forEach(item => {
      const houseDiv = document.createElement("div");
      houseDiv.classList.add("jewelry-item");
      houseDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="jewelry-name">${item.name}</div>
        <div class="jewelry-price">Starting Bid: ${item.price}</div>
        <button class="jewelry-button" onclick="goToRoom('${item.roomLink}')">Room</button>
      `;
      housesGrid.appendChild(houseDiv);
    });
  }
  
  // Redirect to bidding room
  function goToRoom(roomLink) {
    window.location.href = roomLink;
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", loadHouseItems);
  