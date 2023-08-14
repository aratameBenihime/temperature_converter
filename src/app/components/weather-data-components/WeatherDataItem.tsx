"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
interface dataItems {
  img: string;
  val: string | number;
}

interface unitHandling {
  btn: number;
  unit: string;
}

function roundToTwoDecimalPlaces(number: number): number {
  return parseFloat(number.toFixed(2));
}
export default function WeatherDataItem(props: any) {
  let fetchedTemperature: number = props.data.main.temp;
  const [temperature, setTemperature] = useState<number>(fetchedTemperature);
  useEffect(() => {
    setTemperature(fetchedTemperature);
    setButtonSelected({ btn: 1, unit: "C" });
  }, [fetchedTemperature]);

  const [buttonSelected, setButtonSelected] = useState<unitHandling>({
    btn: 1,
    unit: "C",
  });

  const data: number = props.data.main.temp;

  const convertToKelvin = () => {
    setTemperature(roundToTwoDecimalPlaces(data + 273));
    setButtonSelected({ btn: 0, unit: "K" });
  };

  const convertToCelsius = () => {
    setTemperature(roundToTwoDecimalPlaces(data));
    setButtonSelected({ btn: 1, unit: "C" });
  };

  const convertToFahrenheit = () => {
    setTemperature(roundToTwoDecimalPlaces(1.8 * data + 32));
    setButtonSelected({ btn: 2, unit: "F" });
  };

  return (
    <div className="p-[30px]">
      <div className="flex flex-row">
        <p className="mr-2 text-[#818181]">Country Code</p>
        <p>{props.data.sys.country}</p>
      </div>
      <div className="h-[150px] w-full flex justify-center items-center mt-8">
        <Image
          priority
          src="svg/temperature.svg"
          alt="Thermometer Reading Temperature"
          height={100}
          width={100}
          className=" mr-6"
        />

        <div className="flex">
          <h1 className="text-2xl font-medium bg-transparent">{temperature}</h1>
          {buttonSelected.btn !== 0 && <h1> &#176;</h1>}
          <h1 className="text-2xl font-medium bg-transparent">{buttonSelected.unit}</h1>
        </div>
      </div>

      <div className="flex gap-[10px]">
        <button
          className={`flex-1 rounded-full py-3 ${
            buttonSelected.btn === 0 ? "bg-[#2f1c3e]" : "bg-[#1a181f]"
          }`}
          onClick={convertToKelvin}
        >
          To Kelvin
        </button>
        <button
          className={`flex-1 rounded-full py-3 ${
            buttonSelected.btn === 1 ? "bg-[#2f1c3e]" : "bg-[#1a181f]"
          }`}
          onClick={convertToCelsius}
        >
          Celsius
        </button>
        <button
          className={`flex-1 rounded-full py-3 ${
            buttonSelected.btn === 2 ? "bg-[#2f1c3e]" : "bg-[#1a181f]"
          }`}
          onClick={convertToFahrenheit}
        >
          Fahrenheit
        </button>
      </div>

      <div className="grid grid-cols-3 gap-y-10 gap-3 mt-8 bg-[#1a181f] rounded-2xl py-8">
        <DataItems img="wind" val={props.data.wind.speed + " m/s"} />
        <DataItems img="wind-deg" val={props.data.wind.deg + "deg"} />
        <DataItems img="cloud" val={props.data.clouds.all + "%"} />
        <DataItems
          img="visibility"
          val={`${props.data.visibility / 1000} km`}
        />
        <DataItems img="humidity" val={props.data.main.humidity + "%"} />
        <DataItems img="pressure" val={props.data.main.pressure + " hPa"} />
      </div>
    </div>
  );
}

const DataItems = (props: dataItems) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-[40px] w-[40px] rounded-full bg-[#242424] p-[8px]">
        <Image
          src={`/svg/${props.img}.svg`}
          alt={props.img}
          height={35}
          width={35}
          className="h-auto w-auto"
        />
      </div>
      <h1 className="text-xs mt-3">{props.val}</h1>
    </div>
  );
};
