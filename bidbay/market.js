document.addEventListener('DOMContentLoaded', function() {
    // Sample data representing auctions
    const auctions = [
      { id: 1, title: 'Antique Vase', bid: 150, active: false },
      { id: 2, title: 'Vintage Car', bid: 20000, active: false },
      { id: 3, title: 'Painting by Famous Artist', bid: 5000, active: true },
      { id: 4, title: 'Rare Coin Collection', bid: 3000, active: false },
      { id: 5, title: 'Luxury Yacht', bid: 80000, active: true }
    ];
  
    // Calculate market statistics
    const totalAuctions = auctions.length;
    const highestBid = Math.max(...auctions.map(auction => auction.bid));
    const averageBid = auctions.reduce((sum, auction) => sum + auction.bid, 0) / totalAuctions;
    const activeAuctions = auctions.filter(auction => auction.active).length;
  
    // Update the DOM with calculated statistics
    document.getElementById('total-auctions').textContent = totalAuctions;
    document.getElementById('highest-bid').textContent = `$${highestBid}`;
    document.getElementById('average-bid').textContent = `$${averageBid.toFixed(2)}`;
    document.getElementById('active-auctions').textContent = activeAuctions;
  });
  