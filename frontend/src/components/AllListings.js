import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllListings = () => {
  const listings = useSelector(state => state.listings);

  console.log(listings);

  return (
    <div className="all-listings-container">
      {listings.map(listing =>
        <div key={listing.id}  className='listing-container'>
          <Link to={`/listings/${listing.id}`}><div>Title: {listing.title}</div></Link>
          <div>Category: {listing.category}</div>
          <div>Description: {listing.description}</div>
          <div>Price: {listing.price}</div>
        </div>
      )}
    </div>
  );
};

export default AllListings;