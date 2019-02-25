import React from "react"
import PropTypes from "prop-types"

const LoginForm = ({
    handleLogin,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
  return (
  <div>
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <div>
        Username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={handleUsernameChange}//{({ target }) => setUsername(target.value)}
          />
      </div>
      <div>
        Password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={handlePasswordChange}//{({ target }) => setPassword(target.value)}
          />
      </div>
      <button type="submit">login</button>
    </form>
  </div>
  )}

  LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }

  export default LoginForm