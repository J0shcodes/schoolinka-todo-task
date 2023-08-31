const getDate = (): string => {
  const today = new Date();
  const month: string = today.toLocaleString("en-US", { month: "long" });
  const year: string = today.toLocaleString("en-US", { year: "numeric" });

  const date: string = `${month} ${year}`;
  console.log(date);
  return date;
};

export default getDate