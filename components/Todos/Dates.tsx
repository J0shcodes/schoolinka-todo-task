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
      <h3 className="font-semibold">{date}</h3>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Dates;
