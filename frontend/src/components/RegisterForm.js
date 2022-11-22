import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate()

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
  )
}

export default RegisterForm