import { Link } from 'react-router-dom';

const Listing = (props) => {
  const listing = props.listing;
  console.log(listing);

  return (
    <>
      <Link to={`/listings/${listing.id}`}><div>Title: {listing.title}</div></Link>
      <div>Listed by: {listing.listedBy.username}</div>
      <div>Category: {listing.category}</div>
      <div>Description: {listing.description}</div>
      <div>Price: {listing.price}</div>
    </>
  );
};

export default Listing;