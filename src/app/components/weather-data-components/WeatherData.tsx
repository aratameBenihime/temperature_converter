"use client";
import { useEffect, useState } from "react";
import { useCityContext } from "@/app/hooks/useCity";
import { WeatherDataItem } from "..";
interface fetchStatus {
  success: boolean;
  error: boolean;
}

export default function WeatherData() {
  const [data, setData] = useState<any>({});
  const [status, setStatus] = useState<fetchStatus>({
    success: false,
    error: false,
  });
  const { cityName } = useCityContext();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(url);
        const result = await data.json();
        if (result.cod === 200) {
          setData(result);
          console.log(result);
          
          setStatus({
            success: true,
            error: false,
          });
          return;
        }
        if (result.cod === 400) {
          setStatus({ success: false, error: true });
        }
      } catch (error) {
        console.log(error);

        setStatus({ success: false, error: true });
      }
    }
    fetchData();
  }, [cityName]);

  return (
    <div>
       {status.error ? (
        <div className="p-[30px]">
          <h1 className=" text-red-500">ErrorOccured</h1>
          <p>Please Try Again</p>
        </div>
      ) : status.success? (
        <WeatherDataItem data={data} />
      ) : (
        <h1 className="pl-[30px] mt-10">Loading...</h1>
      )}
    </div>
  );
}
