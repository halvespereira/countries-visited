import Map from "./components/map/Map";
import Layout from "./components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimaryButton from "./components/button/PrimaryButton";

function App() {
  return (
    <Layout>
      <Map />
      <br />
      <br />
      <PrimaryButton text="SAVE" size="lg" />
    </Layout>
  );
}

export default App;
