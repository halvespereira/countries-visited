import PrimaryButton from "../button/PrimaryButton";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";

function BasicExample() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  function login() {
    loginWithRedirect();
  }

  function signOut() {
    logout();
  }

  return (
    <div className="__Header">
      <div className="__HeaderTitle">Countries Visited</div>
      <div className="__HeaderButtons">
        {!isAuthenticated ? (
          <PrimaryButton onClick={login} text="SIGN IN / SIGN UP" />
        ) : (
          <PrimaryButton onClick={signOut} text="SIGN OUT" />
        )}
      </div>
    </div>
  );
}

export default BasicExample;
