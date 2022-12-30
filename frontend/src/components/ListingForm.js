import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import listingService from '../services/listings';

import { categories } from './Categories';

const ListingForm = () => {
  const { register, handleSubmit, watch, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm();
  const onSubmit = (data) => {
    listingService.newListing(data);
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        title: '',
        category: '',
        image: '',
        description: '',
        price: '',
      });
    }
  }, [formState, reset]);

  console.log(watch('example'));
  console.log(categories);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input {...register('title', { required: true })} />
          {errors.title && <span>Title is required</span>}
        </div>
        <div>
          <label>Category</label>
          <input {...register('category', { required: true })} />
          {/* <select {...register('category')}>
            <option value="jorma">female</option>
          </select> */}
          {errors.category && <span>Please choose a category</span>}
        </div>
        <div>
          <label>Image</label>
          <input {...register('image', { required: false })} />
        </div>
        <div>
          <label>Description</label>
          <input {...register('description', { required: true })} />
          {errors.description && <span>Description is required</span>}
        </div>
        <div>
          <label>Price</label>
          <input {...register('price', { required: true })} type="number" />
          {errors.price && <span>Price is required</span>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ListingForm;