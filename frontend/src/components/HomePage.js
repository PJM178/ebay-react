import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const listings = useSelector(state => state.listing);

  console.log(listings);
  if (listings) {
    return (
      <div>
        {listings.map(listing =>
          <div key={listing.id}  className='listing-container'>
            <Link to={'/'}><div>Title: {listing.title}</div></Link>
            <div>Category: {listing.category}</div>
            <div>Description: {listing.description}</div>
            <div>Price: {listing.price}</div>
          </div>
        )}
      </div>
    );
  }
};

export default HomePage;