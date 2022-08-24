import { createContext, useContext, useState } from "react";
import MapContextHook from "../domain/interfaces/MapContextHook";

const MapContext = createContext(undefined);

export function MapProvider(props: any) {
  const [countriesSelected, setCountriesSelected] = useState<string[]>([]);

  function addCountry(code: string) {
    setCountriesSelected((prev: string[]) => [...prev, code]);
  }

  function removeCountry(code: string) {
    setCountriesSelected((prev: string[]) =>
      prev.filter((c: string) => c !== code)
    );
  }

  function setCountries(countries: string[]) {
    setCountriesSelected(countries);
  }

  function handleCountrySelected(element: any, code: string) {
    setCountriesSelected((prev) =>
      prev.includes(code)
        ? prev.filter((c: string) => c !== code)
        : [...prev, code]
    );
  }

  return (
    <MapContext.Provider
      value={
        {
          countriesSelected,
          setCountries,
          addCountry,
          removeCountry,
          handleCountrySelected,
        } as any
      }
    >
      {props.children}
    </MapContext.Provider>
  );
}

export function useMapContext(): MapContextHook {
  const context = useContext(MapContext);

  if (!context)
    throw new Error("useMapContext must be used inside a MapProvider");

  return context;
}
