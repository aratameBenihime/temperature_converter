"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface CityContextType {
  cityName: string;
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export const useCityContext = (): CityContextType => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCityContext must be used within a CityProvider");
  }
  return context;
};

interface CityProviderProps {
  children: ReactNode;
}

export const CityProvider: React.FC<CityProviderProps> = ({ children }) => {
  const [cityName, setCityName] = useState("Tokyo");

  return (
    <CityContext.Provider value={{ cityName, setCityName }}>
      {children}
    </CityContext.Provider>
  );
};
