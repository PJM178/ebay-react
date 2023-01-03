import { useSelector } from 'react-redux';
import Listing from './Listing';

const AllListings = () => {
  const listings = useSelector(state => state.listings);

  console.log(listings);

  return (
    <div className="all-listings-container">
      {listings.length === 0 ? <div>Oops... looks like there is nothing here</div> : null}
      {listings.map(listing =>
        <div key={listing.id}  className='listing-container'>
          <Listing listing={listing} />
        </div>
      )}
    </div>
  );
};

export default AllListings;