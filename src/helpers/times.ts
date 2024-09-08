import moment from "moment"

export const monthHour = (date: string) => {
  const today = moment(date)
  return today.format("HH:mm a")

}