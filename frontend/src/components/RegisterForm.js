import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import registerService from '../services/register';

const RegisterForm = () => {
  const navigate = useNavigate();
  const loggedUser = useSelector(state => state.user);
  const { register, handleSubmit, watch, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm();
  const onSubmit = async (data) => {
    registerService.register(data);
    console.log(data);
  };

  useEffect(() => {
    if (loggedUser) {
      navigate('/');
    }
    if (isSubmitSuccessful) {
      reset({
        username: '',
        password: ''
      });
    }
  }, [formState, reset]);

  console.log(watch('username'));

  return (
    <div>
      <div style={{ padding: '0.5rem' }}>
        {/* Go back to previous page - same as clicking back */}
        <button type="button" onClick={() => navigate(-1)}>back</button>
      </div>
      <div className="user-administration-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div><label>Username</label></div>
            <input {...register('username', { required: true })}></input>
            {errors.username && <span>Username is required</span>}
          </div>
          <div>
            <div><label>Password</label></div>
            <input type="password" {...register('password', { required: true })}></input>
            {errors.password && <span>Password is required</span>}
          </div>
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;