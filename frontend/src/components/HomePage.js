import { useSelector } from 'react-redux';
import Listing from './Listing';

import Categories from './Categories';

const HomePage = () => {
  const listings = useSelector(state => state.listings);
  console.log(listings);
  const randomListingArray = [];

  if (listings.length > 1) {
    for (let i = 0; i < 2;) {
      let randomListing = listings[Math.floor(Math.random()*listings.length)];
      if (!randomListingArray.includes(randomListing)) {
        randomListingArray.push(randomListing);
        i++;
      }
    }
  } else {
    let randomListing = listings[Math.floor(Math.random()*listings.length)];
    randomListingArray.push(randomListing);
    console.log(randomListingArray);
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
        {randomListingArray.length > 0 && randomListingArray[0] !== undefined
          ?
          <div>
            {randomListingArray.map(listing =>
              <div key={listing.id}  className='listing-container'>
                <Listing listing={listing} />
              </div>
            )}
          </div>
          :
          null}
      </div>
    </div>
  );
};

export default HomePage;