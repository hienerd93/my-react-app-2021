import { differenceInDays, lastDayOfYear } from "date-fns";

const getRestOfYear = (date: Date | string = new Date()) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  return differenceInDays(lastDayOfYear(date), date);
};

export { getRestOfYear };
