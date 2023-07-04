AOS.init();

const dateEvent = new Date("Aug 01, 2023 19:00:00")
const timeStampEvent = dateEvent.getTime()

countHours = setInterval(() => {
  const now = new Date()
  const timeStampCurrent = now.getTime()
  const distanceEvent = timeStampEvent - timeStampCurrent

  const daysInMs = 1000 * 60 * 60 * 24
  const hoursInMs = 1000 * 60 * 60
  const minutesInMs = 1000 * 60

  const daysUntilTheEvent = Math.floor(distanceEvent / daysInMs)
  const hoursUntilTheEvent = Math.floor((distanceEvent % daysInMs / hoursInMs))
  const minutesUntilTheEvent = Math.floor(distanceEvent % hoursInMs / minutesInMs)
  const secondsUntilTheEvent = Math.floor(distanceEvent % minutesInMs / 1000)

  document.querySelector('#counter').innerHTML = `${daysUntilTheEvent}d ${hoursUntilTheEvent}h ${minutesUntilTheEvent}m ${secondsUntilTheEvent}s`

  if (distanceEvent < 0) {
    clearInterval(countHours)
    document.querySelector('#counter').innerHTML = 'Evento expirado'
  }
}, 1000)