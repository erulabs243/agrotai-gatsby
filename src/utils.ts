import { DateTime, DateTimeFormatOptions } from "luxon";

export const formatDate = (date: string) => {
  const dt = DateTime.fromISO(date);
  const format: DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  return dt.setLocale("fr").toLocaleString(format);
};
