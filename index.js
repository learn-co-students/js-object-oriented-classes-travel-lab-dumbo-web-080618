let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1)
    let experience = (endDate - this.startDate) / (365*24*60*60*1000)
    return Math.round(experience)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    // beginningLocation = {
    //   horizontal: 'Park',
    //   vertical: '34'
    // }
    // endingLocation = {
    //   horizontal: 'Park',
    //   vertical: '45'
    // } => 11
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  findAvenueIndex(avenue) {
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    let verticalDistance = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical))

    let horizontalDistance = Math.abs(this.findAvenueIndex(this.endingLocation.horizontal) - this.findAvenueIndex(this.beginningLocation.horizontal))

    return (verticalDistance + horizontalDistance) // 4, 11, 15
  }

  estimatedTime(peak) {
    // off-peak: 3 blocks / minute
    // peak: 2 blocks / minute
    if (peak) {
      return Math.round(this.blocksTravelled() / 2)
    } else {
      return Math.round(this.blocksTravelled() / 3)
    }
  }
}
