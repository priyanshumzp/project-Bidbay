function filterAuctions() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const auctionItems = document.querySelectorAll('.auction-item');
  
    auctionItems.forEach(item => {
      const itemName = item.getAttribute('data-name').toLowerCase();
      if (itemName.includes(searchInput)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }
  