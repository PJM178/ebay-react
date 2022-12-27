import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../reducers/userReducer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector(state => state.user);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password
    };
    dispatch(loginUser(user));
    setUsername('');
    setPassword('');
    navigate('/');
  };

  useEffect(() => {
    if (loggedUser) {
      navigate('/');
    }
  });

  return (
    <div>
      <div>
        {/* Go back to previous page - same as clicking back */}
        <button type="button" onClick={() => navigate(-1)}>back</button>
      </div>
      <div className="user-administration-container">
        <h2>Sign in</h2>
        <form onSubmit={handleLogin}>
          <table>
            <tbody>
              <tr>
                <td>
                Username:
                </td>
                <td>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    name="Username"
                    placeholder="Username..."
                    onChange={({ target }) => setUsername(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                Password:
                </td>
                <td>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    name="Password"
                    placeholder="Password..."
                    onChange={({ target }) => setPassword(target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="user-submit-element">
            <button type="submit" id="user-submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;