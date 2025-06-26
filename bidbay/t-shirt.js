// Sample signed T-shirt data
const tshirtItems = [
    // { name: "Rockstar Signed T-shirt", price: "$150", img: "rockstar", roomLink: "bidding-room.html?item=rockstar-tshirt" },
    { name: "Movie Star Signed T-shirt", price: "$120", img: "/sign/movie star.jpg", roomLink: "index10.html" },
    { name: "Football Legend Signed T-shirt", price: "$200", img: "/sign/football.jpg", roomLink: "index10.html" },
    { name: "Pop Icon Signed T-shirt", price: "$180", img: "/sign/pop.jpg", roomLink: "index10.html" },
    { name: "Basketball MVP Signed T-shirt", price: "$250", img: "/sign/basketball.jpg", roomLink: "index10.html" },
    { name: "Hip-Hop Artist Signed T-shirt", price: "$170", img: "/sign/hip hop.jpg", roomLink: "index10.html" },
    { name: "Superhero Signed T-shirt", price: "$220", img: "/sign/superhero.jpg", roomLink: "index10.html" },
    { name: "Motorsport Legend Signed T-shirt", price: "$210", img: "/sign/motor sport.jpg", roomLink: "index10.html" },
    { name: "Famous DJ Signed T-shirt", price: "$140", img: "/sign/dj.jpg", roomLink: "index10.html" },
    { name: "TV Star Signed T-shirt", price: "$160", img: "/sign/tv.jpg", roomLink: "index10.html" },
    { name: "Olympic Champion Signed T-shirt", price: "$300", img: "/sign/olympic champion.jpg", roomLink: "index10.html" },
    { name: "Singers Signed T-shirt", price: "$180", img: "/sign/singer.jpg", roomLink: "index10.html" },
    { name: "Hollywood Actor Signed T-shirt", price: "$220", img: "/sign/hollywood actor.jpg", roomLink: "index10.html" },
    { name: "Indie Artist Signed T-shirt", price: "$130", img: "/sign/movie star.jpg", roomLink: "index10.html" },
    // { name: "Famous Chef Signed T-shirt", price: "$140", img: "", roomLink: "bidding-room.html?item=famous-chef-tshirt" },
    // { name: "Fashion Icon Signed T-shirt", price: "$250", img: "", roomLink: "bidding-room.html?item=fashion-icon-tshirt" },
    { name: "Iconic Athlete Signed T-shirt", price: "$260", img: "/sign/ms.png", roomLink: "index10.html" },
    { name: "Legendary Director Signed T-shirt", price: "$230", img: "/sign/director.jpg", roomLink: "index10.html" },
    // { name: "Comedy Star Signed T-shirt", price: "$150", img: "", roomLink: "bidding-room.html?item=comedy-star-tshirt" },
    // { name: "Rock Legend Signed T-shirt", price: "$300", img: "", roomLink: "bidding-room.html?item=rock-legend-tshirt" },
  ];
  
  // Dynamically load T-shirt items
  function loadTshirtItems() {
    const tshirtsGrid = document.getElementById("tshirts-grid");
    tshirtItems.forEach(item => {
      const tshirtDiv = document.createElement("div");
      tshirtDiv.classList.add("tshirt-item");
      tshirtDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="tshirt-name">${item.name}</div>
        <div class="tshirt-price">Starting Bid: ${item.price}</div>
        <button class="tshirt-button" onclick="goToRoom('${item.roomLink}')">Room</button>
      `;
      tshirtsGrid.appendChild(tshirtDiv);
    });
  }
  
  // Redirect to bidding room
  function goToRoom(roomLink) {
    window.location.href = roomLink;
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", loadTshirtItems);
  