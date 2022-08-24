/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "./components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";
import Content from "./components/content/Content";
import { useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();

  async function setAccessToken() {
    const token = await getAccessTokenSilently();

    axios.defaults.headers.common["Authorization"] = token;
    axios.defaults.headers.common["Accept"] = "*/*";
  }

  useEffect(() => {
    setAccessToken();
  }, []);

  return (
    <Layout>
      {!isAuthenticated ? (
        <p>Not logged in</p>
      ) : user ? (
        <Content user={user} />
      ) : (
        <Spinner animation="grow" variant="secondary" />
      )}
    </Layout>
  );
}

export default App;
