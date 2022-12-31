import { Link } from 'react-router-dom';
import { categories } from './Categories';

const AllCategories = () => {
  return (
    <div className="all-categories-container">
      {categories.map((category, i) =>
        <div key={i} className="category-container">
          <h3 className="category-title">{category.categoryName}</h3>
          {category.subCategories.map((subCategory, i) =>
            <ul key={i} className="category-subcategory-list">
              <Link to={`/categories/${subCategory.replace(/[^a-zA-Z0-9_\s]/g,'')
                .split(' ').join('-').replace('--', '-').toLowerCase()}`} state={subCategory}>
                <li style={{ listStyle: 'none' }}>{subCategory}</li>
              </Link>
            </ul>)}
        </div>)}
    </div>
  );
};

export default AllCategories;