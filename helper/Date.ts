import DatesInterface from "@/interfaces/Dates";

export const getDate = (): string => {
  const today = new Date();
  const month: string = today.toLocaleString("en-US", { month: "long" });
  const year: string = today.toLocaleString("en-US", { year: "numeric" });

  const date: string = `${month} ${year}`;
  return date;
};

export const getDatesInAMonth = (year: number, month: number, date: number) : DatesInterface[] => {
  const startDate = new Date(year, month, date);
  const endDate = new Date(year, month, date + 11);

  let dates = [];

  while (startDate < endDate) {
    const datesObject = {
      date: new Date(startDate).getDate(),
      weekday: new Date(startDate).toLocaleString("en-US", {
        weekday: "short",
      }),
    };

    dates.push(datesObject)
    startDate.setDate(startDate.getDate() + 1)
  }

  return dates;
};
