document.addEventListener('DOMContentLoaded', function() {
    const auctions = [
      {
        id: 1,
        title: 'Antique Vase',
        price: 150,
        endDate: '2024-10-05',
      },
      {
        id: 2,
        title: 'Vintage Car',
        price: 20000,
        endDate: '2024-10-15',
      },
      {
        id: 3,
        title: 'Painting by Famous Artist',
        price: 5000,
        endDate: '2024-11-01',
      },
      {
        id: 3,
        title: 'Painting by Famous Artist',
        price: 5000,
        endDate: '2024-11-01',
      },
      {
        id: 2,
        title: 'Vintage Car',
        price: 20000,
        endDate: '2024-10-15',
      },
      {
        id: 1,
        title: 'Antique Vase',
        price: 150,
        endDate: '2024-10-05',
      },
    ];
  
    const auctionList = document.getElementById('auction-items');
  
    // Render auctions dynamically
    auctions.forEach((auction) => {
      const listItem = document.createElement('li');
      listItem.classList.add('auction-item');
  
      const auctionTitle = document.createElement('h3');
      auctionTitle.textContent = auction.title;
  
      const auctionPrice = document.createElement('span');
      auctionPrice.textContent = `$${auction.price}`;
  
      const auctionEndDate = document.createElement('p');
      auctionEndDate.textContent = `Ends on: ${auction.endDate}`;
  
      // Combine into a list item
      listItem.appendChild(auctionTitle);
      listItem.appendChild(auctionPrice);
      listItem.appendChild(auctionEndDate);
  
      auctionList.appendChild(listItem);
    });
  });
  