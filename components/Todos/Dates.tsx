import { useEffect, useState } from "react";

import getDate from "@/helper/Date";

const Dates = () => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const date = getDate();
    setDate(date);
  }, [setDate]);

  return (
    <div>
      <h3 className="font-semibold text-schoolinka-grey-900">{date}</h3>
      <div className="flex justify-between mt-6">
        <div className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900">
          <p>Mon</p>
          <p>1</p>
        </div>
        <div className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900">
          <p>Tue</p>
          <p>2</p>
        </div>
        <div className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900">
          <p>Wed</p>
          <p>3</p>
        </div>
        <div className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900">
          <p>Thu</p>
          <p>4</p>
        </div>
        <div className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900">
          <p>Fri</p>
          <p>5</p>
        </div>
        <div className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900">
          <p>Sat</p>
          <p>6</p>
        </div>
        <div className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900">
          <p>Sun</p>
          <p>7</p>
        </div>
        <div className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900">
          <p>Mon</p>
          <p>8</p>
        </div>
        <div className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900">
          <p>Tue</p>
          <p>9</p>
        </div>
        <div className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900">
          <p>Wed</p>
          <p>10</p>
        </div>
        <div className="font-semibold text-center text-sm border border-solid border-[#d0d5dd] rounded-lg py-2.5 px-4 text-schoolinka-grey-900">
          <p>Thu</p>
          <p>11</p>
        </div>
      </div>
    </div>
  );
};

export default Dates;
