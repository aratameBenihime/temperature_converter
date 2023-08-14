"use client";
import Image from "next/image";
import { useCityContext } from "@/app/hooks/useCity";
export default function LocationHeader() {
  const { cityName } = useCityContext();
  return (
    <div className="flex mt-3 h-[22px]">
      <Image
        alt="location"
        className="mr-3 h-auto w-auto"
        height={10}
        src="svg/pin.svg"
        width={10}
      />
      <p className="text-[#fdfdfa] font-medium me-1">{cityName}</p>
    </div>
  );
}
