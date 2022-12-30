import { categories } from './Categories';

const AllCategories = () => {
  return (
    <div className="all-categories-container">
      {categories.map((category, i) =>
        <div key={i} className="category-container">
          <h3 className="category-title">{category.categoryName}</h3>
          {category.subCategories.map((subCategory, i) =>
            <ul key={i} className="category-subcategory-list">
              <li style={{ listStyle: 'none' }}>{subCategory}</li>
            </ul>)}
        </div>)}
    </div>
  );
};

export default AllCategories;