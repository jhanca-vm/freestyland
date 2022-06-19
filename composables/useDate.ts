export default () => ({
  getDate(timestamp: Date) {
    const date = new Date(timestamp)

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  },
  getTime(timestamp: Date) {
    const date = new Date(timestamp)
    const hours = date.getHours()
    const minutes = date.getMinutes()

    if (date.getUTCHours() === 5) return '__ : __'

    const time = {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
    }

    return `${time.hours}:${time.minutes}`
  },
})
