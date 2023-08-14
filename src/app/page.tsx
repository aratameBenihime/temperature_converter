import { Metadata } from "next";
import { AppHeader, SearchBar } from "./components";
import WeatherData from "./components/weather-data-components/WeatherData";

export const metadata: Metadata = {
  title: "SkyLink",
  description: "Weather App For Built With NextJS, TailiwndCSS and TypeScript",
  manifest:"/manifest.webmanifest"
};

export default function Home() {
  return (
    <main>
      <AppHeader />
      <SearchBar />
      <WeatherData />
    </main>
  );
}