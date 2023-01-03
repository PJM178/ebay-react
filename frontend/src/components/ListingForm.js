import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { categories } from './Categories';
import { newListing } from '../reducers/listingsReducer';
import { useSelector } from 'react-redux';

const ListingForm = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm();
  const onSubmit = (data) => {
    dispatch(newListing(data, user));
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
    <div className='listing-form-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='listing-form-field'>
          <div><label>Title</label></div>
          <input {...register('title', { required: true })} />
          {errors.title && <span>Title is required</span>}
        </div>
        <div className='listing-form-field'>
          <div><label>Category</label></div>
          <input {...register('category', { required: true })} />
          {/* <select {...register('category')}>
            <option value="jorma">female</option>
          </select> */}
          {errors.category && <span>Please choose a category</span>}
        </div>
        <div className='listing-form-field'>
          <div><label>Image</label></div>
          <input {...register('image', { required: false })} />
        </div>
        <div className='listing-form-field'>
          <div><label>Description</label></div>
          <input {...register('description', { required: true })} />
          {errors.description && <span>Description is required</span>}
        </div>
        <div className='listing-form-field'>
          <div><label>Price</label></div>
          <input {...register('price', { required: true })} type="number" />
          {errors.price && <span>Price is required</span>}
        </div>
        <div className='listing-form-submit'>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ListingForm;