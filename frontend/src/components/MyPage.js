import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MyPage = () => {
  const user = useSelector(state => state.user);
  const listings = useSelector(state => state.listings);
  let userListings = listings.allListings.filter(listing => listing.listedBy.id === user.id);

  if (listings.length > userListings.length) {
    console.log('jorma');
    userListings = listings.allListings.filter(listing => listing.listedBy.id === user.id);
  }

  console.log(userListings);
  console.log(listings);

  return (
    <div>
      <div className="all-listings-container">
        {userListings.map(listing =>
          <div key={listing.id}  className='listing-container'>
            <Link to={`/listings/${listing.id}`}><div>Title: {listing.title}</div></Link>
            <div>Category: {listing.category}</div>
            <div>Description: {listing.description}</div>
            <div>Price: {listing.price}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPage;