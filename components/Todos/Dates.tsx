import { useEffect, useState } from "react";

import { getDate, getDatesInAMonth } from "@/helper/Date";
import DateInterface from "@/interfaces/Dates";

const Dates = () => {
  const [date, setDate] = useState<string>("");
  const [dates, setDates] = useState<DateInterface[]>([]);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const todayDate = today.getDate();

  useEffect(() => {
    const date = getDate();
    setDate(date);

    const datesInAMonth = getDatesInAMonth(year, month, todayDate);
    setDates(datesInAMonth);
  }, [setDate, year, month, todayDate]);

  return (
    <div>
      <h3 className="font-semibold text-schoolinka-grey-900">{date}</h3>
      <div className="flex justify-between mt-6">
        {dates.map((date) => (
          <div
            key={date.date}
            className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900"
          >
            <p>{date.weekday}</p>
            <p>{date.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dates;
