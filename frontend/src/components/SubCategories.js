import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SubCategories = () => {
  const listings = useSelector(state => state.listings);
  const location = useLocation();
  const subCategory = location.state;

  const categoryListings = listings.allListings.filter(listing => listing.category === subCategory);
  console.log(categoryListings);

  return (
    <div>
      <div className="all-categories-container">
        <div className="category-container">
          <h3 className="category-title">{subCategory}</h3>
        </div>
      </div>
      <div className="all-listings-container">
        {categoryListings.length === 0 ? <div style={{ padding: '5px' }}>Oops... seems like there is nothing here</div> : null}
        {categoryListings.map(listing =>
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

export default SubCategories;