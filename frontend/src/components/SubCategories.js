import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Listing from './Listing';

const SubCategories = () => {
  const listings = useSelector(state => state.listings);
  const location = useLocation();
  const subCategory = location.state;

  const categoryListings = listings.filter(listing => listing.category === subCategory);
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
            <Listing listing={listing} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCategories;