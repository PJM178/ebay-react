import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoginForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  console.log(username)
  console.log(password)
  return (
    <div>
      <div>
        {/* Go back to previous page - same as clicking back */}
        <button type="button" onClick={() => navigate(-1)}>back</button>
      </div>
      <div className="user-administration-container">
        <h2>Sign in</h2>
        <form>
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
            <button type="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm