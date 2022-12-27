import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const RegisterForm = () => {
  const navigate = useNavigate();
  const loggedUser = useSelector(state => state.user);

  useEffect(() => {
    if (loggedUser) {
      navigate('/');
    }
  });

  return (
    <div>
      <div style={{ padding: '0.5rem' }}>
        {/* Go back to previous page - same as clicking back */}
        <button type="button" onClick={() => navigate(-1)}>back</button>
      </div>
      <div className="user-administration-container">
        <h2>Register</h2>
      </div>
    </div>
  );
};

export default RegisterForm;