import React from "react"

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

  export default LoginForm