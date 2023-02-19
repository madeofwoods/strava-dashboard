import moment from "moment"

export const secsToMins = (seconds:number):string => {
    const duration = moment.duration(seconds, "seconds")
    const format = `${duration.minutes()}:${String(duration.seconds()).padStart(2, "0")}`
    return format
  }