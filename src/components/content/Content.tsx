/* eslint-disable react-hooks/exhaustive-deps */
import Map from "../map/Map";
import PrimaryButton from "../button/PrimaryButton";
import { useEffect } from "react";
import { useMapContext } from "../../context/map";
import { get } from "../../utils/restClient";
import { Spinner } from "react-bootstrap";

type Props = {
  user: any;
};

function Content({ user }: Props) {
  const { setCountries, countriesSelected } = useMapContext();

  useEffect(() => {
    async function getUser() {
      const params = {
        userId: user.sub,
      };
      const response = await get("/countries", params);

      console.log(response);
    }

    getUser();
  }, []);

  // if (!countriesSelected.length)
  //   return <Spinner animation="grow" variant="secondary" />;

  return (
    <>
      <Map />
      <br />
      <br />
      <PrimaryButton text="SAVE" size="lg" />
    </>
  );
}

export default Content;
