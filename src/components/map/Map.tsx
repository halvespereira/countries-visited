import esMill from "@react-jvectormap/world/dist/worldMill.json";
import { VectorMap } from "@react-jvectormap/core";
import { useRef, useState } from "react";

function Map() {
  const mapRef = useRef();
  const [countriesSelected, setCountriesSelected] = useState<string[]>([]);
  function handleSelected(event: any, code: string) {
    setCountriesSelected((prev) =>
      prev.includes(code)
        ? prev.filter((c: string) => c !== code)
        : [...prev, code]
    );
  }

  function handleSave() {
    console.log(countriesSelected);
  }

  return (
    <div style={{ width: 1500, height: 800, borderRadius: "15px" }}>
      <VectorMap
        map={esMill}
        zoomAnimate
        mapRef={mapRef}
        zoomOnScroll
        regionsSelectable
        selectedRegions={[]}
        onRegionSelected={handleSelected}
        backgroundColor="#c2dfff"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Map;
