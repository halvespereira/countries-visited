import { createContext, useContext, useState } from "react";
// import LoaderContextHook from "../domain/interfaces/LoaderContextHook";

const MapContext = createContext(undefined);

export function MapProvider(props: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  function startLoader(message?: string): void {
    setIsLoading(true);
    if (message) {
      setMessage(message);
    }
  }

  function stopLoader() {
    setIsLoading(false);
    setMessage("");
  }
  return (
    <MapContext.Provider
      value={
        {
          startLoader,
          stopLoader,
          isLoading,
          message,
        } as any
      }
    >
      {props.children}
    </MapContext.Provider>
  );
}

// export function useLoaderContext(): LoaderContextHook {
//   const context = useContext(MapContext);

//   if (!context)
//     throw new Error("useLoaderContext must be used inside a MapProvider");

//   return context;
// }
