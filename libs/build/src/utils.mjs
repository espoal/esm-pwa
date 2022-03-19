
export const timeNow = (date = new Date()) => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`


export const watchHelper = {
  onRebuild(error, result) {
    if (error) console.error('watch build failed:', error)
    else {
      console.log('watch build succeeded at time: ' + timeNow())
      const {errors, warnings} = result
      console.log({errors, warnings})
    }
  }
}
