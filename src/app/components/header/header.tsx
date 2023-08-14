'use client';
import { getCurrentDate } from "@/app/lib/helpers/date";
import LocationHeader from "./locationInHeader";
export default function AppHeader() {

  const currentDate: string = getCurrentDate();

  return (
    <div className="px-[30px] pt-8 flex justify-between items-start">
      <div className="flex flex-col">
        <p className="text-[#818181]">{currentDate}</p>
        <LocationHeader />
      </div>
      <div className="relative">
      </div>
    </div>
  );
}
