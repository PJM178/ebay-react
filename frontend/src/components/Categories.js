export const categories = [
  {
    'categoryName': 'Collectibles & Art',
    'subCategories': ['Collectibles', 'Art']
  },
  {
    'categoryName': 'Electronics',
    'subCategories': ['Computers & tablets', 'Cameras & photo', 'TV, audio & surveillance']
  }
];

const Categories = () => {
  return (
    <div>
      {categories.map((category, i) =>
        <div key={i}>
          {category.categoryName}
          {category.subCategories.map((subCategory, i) =>
            <ul key={i}>
              <li>{subCategory}</li>
            </ul>)}
        </div>)}
    </div>
  );
};

export default Categories;