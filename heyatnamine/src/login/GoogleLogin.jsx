import React from "react";
import { GoogleLogin } from "react-google-login";

// Step 3: Implement the response handlers
const responseGoogle = (response) => {
  console.log(response);
  // Dispatch an action or make an API call to the backend
};

const handleLoginFailure = (response) => {
  alert("Failed to log in");
};

const GoogleLogin = () => {
  return (
    <GoogleLogin
      clientId="YOUR_ACTUAL_GOOGLE_CLIENT_ID"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={handleLoginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLogin;
