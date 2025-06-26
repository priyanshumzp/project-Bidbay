// Sample painting data
const paintingItems = [
    { name: "Sunset Serenity", price: "$1,200", img: "/painting/sunset serinity.jpeg.jpg", roomLink: "index10.html" },
    { name: "Forest Walk", price: "$900", img: "/painting/forest walk.avif", roomLink: "index10.html" },
    { name: "Golden Waves", price: "$2,000", img: "/painting/golden waves.jpg", roomLink: "index10.html" },
    { name: "Night Sky", price: "$1,800", img: "/painting/night sky.avif", roomLink: "index10.html" },
    { name: "Abstract Delight", price: "$3,000", img: "/painting/abstract painting.jpg", roomLink: "index10.html" },
    { name: "Ocean Breeze", price: "$1,100", img: "/painting/ocean breeze.jpg", roomLink: "index10.html" },
    { name: "Mountain Majesty", price: "$1,600", img: "/painting/mountain majesty.jpg", roomLink: "index10.html" },
    { name: "Pastel Fields", price: "$950", img: "/painting/pastel field.webp", roomLink: "index10.html" },
    { name: "City Glow", price: "$2,500", img: "/painting/city glow.jpg", roomLink: "index10.html" },
    { name: "Desert Hues", price: "$1,700", img: "/painting/desert crues.jpg", roomLink: "index10.html" },
    { name: "Vintage Landscape", price: "$1,400", img: "/painting/vintage landscape.jpeg.jpg", roomLink: "index10.html" },
    { name: "Floral Bliss", price: "$850", img: "/painting/floral bliss.jpg", roomLink: "index10.html" },
    { name: "Modern Waves", price: "$2,200", img: "/painting/modern waves.webp", roomLink: "index10.html" },
    { name: "Twilight Dreams", price: "$1,300", img: "/painting/twilight.jpg", roomLink: "index10.html" },
    { name: "Autumn Glow", price: "$1,000", img: "/painting/autumn glow.jpg", roomLink: "index10.html" },
    { name: "Harmony of Colors", price: "$2,800", img: "/painting/Harmony of colour.jpeg.jpg", roomLink: "index10.html" },
  ];
  
  // Dynamically load painting items
  function loadPaintingItems() {
    const paintingsGrid = document.getElementById("paintings-grid");
    paintingItems.forEach(item => {
      const paintingDiv = document.createElement("div");
      paintingDiv.classList.add("jewelry-item");
      paintingDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="jewelry-name">${item.name}</div>
        <div class="jewelry-price">Starting Bid: ${item.price}</div>
        <button class="jewelry-button" onclick="goToRoom('${item.roomLink}')">Room</button>
      `;
      paintingsGrid.appendChild(paintingDiv);
    });
  }
  
  // Redirect to bidding room
  function goToRoom(roomLink) {
    window.location.href = roomLink;
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", loadPaintingItems);
  