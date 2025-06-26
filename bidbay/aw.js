document.addEventListener('DOMContentLoaded', function() {
    const awardedAuctions = [
      {
        id: 1,
        title: 'Antique Clock',
        winner: 'John Doe',
        finalBid: 300,
        dateAwarded: '2024-09-30'
      },
      {
        id: 2,
        title: 'Luxury Watch',
        winner: 'Jane Smith',
        finalBid: 15000,
        dateAwarded: '2024-09-28'
      },
      {
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },{
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },{
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },
      {
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },
      {
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },
      {
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },
      {
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },
      {
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },
      {
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },
      {
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },
      {
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },
      {
        id: 3,
        title: 'Oil Painting',
        winner: 'Samuel L.',
        finalBid: 5000,
        dateAwarded: '2024-09-25'
      },
    ];
  
    const awardedAuctionList = document.getElementById('awarded-auction-items');
  
    // Render awarded auctions dynamically
    awardedAuctions.forEach((auction) => {
      const listItem = document.createElement('li');
      listItem.classList.add('awarded-item');
  
      const auctionTitle = document.createElement('h3');
      auctionTitle.textContent = auction.title;
  
      const auctionWinner = document.createElement('p');
      auctionWinner.classList.add('winner');
      auctionWinner.textContent = `Winner: ${auction.winner}`;
  
      const auctionFinalBid = document.createElement('p');
      auctionFinalBid.classList.add('final-bid');
      auctionFinalBid.textContent = `Final Bid: $${auction.finalBid}`;
  
      const dateAwarded = document.createElement('p');
      dateAwarded.textContent = `Awarded on: ${auction.dateAwarded}`;
  
      // Combine into a list item
      listItem.appendChild(auctionTitle);
      listItem.appendChild(auctionWinner);
      listItem.appendChild(auctionFinalBid);
      listItem.appendChild(dateAwarded);
  
      awardedAuctionList.appendChild(listItem);
    });
  });
  