export const epochSeconds = () => Math.round(Date.now()/1000)

export const parseResp = resp => {
  const chunks = resp.split('\n')
  const data = chunks.map(chunk => {
    try {
      const { day, eventsCount } = JSON.parse(chunk)
      const time = day // .split('2022-').pop()
      const dataPoint = {time, amount: eventsCount}
      return dataPoint

    } catch (parseErr) {
      console.log({parseErr})
      return {}
    }
  })
  return data

}

export const parseGeoResp = resp => {
  const chunks = resp.split('\n')
  const data = chunks.map(chunk => {
    try {
      const dataPoint = JSON.parse(chunk)
      return dataPoint

    } catch (parseErr) {
      console.log({parseErr})
      return {}
    }
  })
  return data

}
