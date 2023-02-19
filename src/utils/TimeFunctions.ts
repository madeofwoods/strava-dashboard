import moment from "moment";

export const secsToMins = (seconds: number): string => {
  const duration = moment.duration(seconds, "seconds");
  const format = `${duration.minutes()}:${String(duration.seconds()).padStart(2, "0")}`;
  return format;
};

export const getMonth = (): string[] => {
  const date = new Date();
  const monthNumeric = String(date.getMonth() + 1).padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" });
  return [month, monthNumeric];
};

//   export const secondsToMins = (time:number):string => {
//     const timeRounded = Math.round(time)
//     const mins = String(Math.floor(time / 60))
//     const seconds = String(timeRounded % 60).padStart(2, "0")
//     const minsAndSeconds = mins + ":" + seconds

//     return minsAndSeconds
// }
