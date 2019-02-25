import React from "react"
import PropTypes from "prop-types"

const LoginForm = ({
  handleLogin,
  //handleUsernameChange,
  //handlePasswordChange,
  username,
  password
}) => {
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
        Username
          <input {...username} empty=""/>
        </div>
        <div>
        Password
          <input {...password} empty=""/>
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}

export default LoginForm