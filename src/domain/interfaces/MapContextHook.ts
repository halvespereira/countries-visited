export default interface MapContextHook {
  countriesSelected: string[];
  addCountry: (code: string) => void;
  removeCountry: (code: string) => void;
  handleCountrySelected: (element: any, code: string) => void;
  setCountries: (countries: string[]) => void;
}
