import esMill from "@react-jvectormap/world/dist/worldMill.json";
import { VectorMap } from "@react-jvectormap/core";
import { useRef } from "react";
import { useMapContext } from "../../context/map";
import "./Map.css";

function Map() {
  const mapRef = useRef();
  const { handleCountrySelected } = useMapContext();

  return (
    <div className="__Map">
      <VectorMap
        map={esMill}
        zoomAnimate
        mapRef={mapRef}
        zoomOnScroll
        regionsSelectable
        selectedRegions={[]}
        onRegionSelected={handleCountrySelected}
        regionStyle={{
          initial: {
            fill: "#f6fff8",
            fillOpacity: 1,
            stroke: "ActiveBorder",
          },
          hover: {
            fillOpacity: 0.8,
          },
          selected: {
            fill: "#6b9080",
          },
          selectedHover: {
            fillOpacity: 0.8,
          },
        }}
      />
    </div>
  );
}

export default Map;
