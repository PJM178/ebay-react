import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleListing = () => {
  const listings = useSelector(state => state.listings);
  const id = useParams().id;

  const listing = listings.find(listing => listing.id === id);

  useEffect(() => {
    console.log(listings.find(listing => listing.id === id));
    console.log(listings);
  });

  console.log(listing);
  console.log(listings);
  console.log(id);
  if (!listing) {
    return null;
  }

  return (
    <div>
      <div>jorma{listing.title}</div>
    </div>
  );
};

export default SingleListing;