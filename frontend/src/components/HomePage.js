import { useSelector } from 'react-redux';

import Categories from './Categories';

const HomePage = () => {
  const listings = useSelector(state => state.listings);
  const randomListingArray = [];

  if (listings.length > 0) {
    for (let i = 0; i < 2;) {
      let randomListing = listings[Math.floor(Math.random()*listings.length)];
      if (!randomListingArray.includes(randomListing)) {
        randomListingArray.push(randomListing);
        i++;
      }
    }
  }

  console.log(randomListingArray);

  return (
    <div>
      <div>
        <h2>Categories</h2>
        <ul>
          <Categories />
        </ul>
      </div>
      <div>
        <h2>Random listings</h2>
        {randomListingArray.length > 0
          ?
          <div>
            {randomListingArray.map(listing =>
              <div key={listing.id}>{listing.id}</div>
            )}
          </div>
          :
          null}
      </div>
    </div>
  );
};

export default HomePage;