import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SubCategories = () => {
  const listings = useSelector(state => state.listings);
  const location = useLocation();
  const subCategory = location.state;

  const categoryListings = listings.filter(listing => listing.category === subCategory);
  console.log(categoryListings);

  return (
    <div className="all-categories-container">
      <div className="category-container">
        <h3 className="category-title">{subCategory}</h3>
      </div>
    </div>
  );
};

export default SubCategories;