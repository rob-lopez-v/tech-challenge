import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, error } = useAuth0();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await loginWithRedirect();
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      {error && <div className="error-message">{error.message}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default LoginButton;