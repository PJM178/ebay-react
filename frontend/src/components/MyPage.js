import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { test } from '../reducers/userListingsReducer';

const MyPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const listings = useSelector(state => state.listings);
  const userListings = useSelector(state => state.userListings);

  console.log(listings);

  useEffect(() => {
    if (userListings.length === 0) {
      console.log(user);
      dispatch(test(listings, user));
    }
    console.log('test');
  }, [listings]);

  console.log(userListings);

  return (
    <div>
      <div className="all-listings-container">
        <h3>My listings</h3>
        {listings.length === 0 ? <div>Oops... looks like there is nothing here</div> : null}
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