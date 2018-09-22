class Driver{
  constructor(name, dateString){
    this.name = name;
    this.dateString = dateString
    this.startDate = new Date(this.dateString)
  }

  // startDate(){
  //   return new Date(this.dateString)
  // }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear() - 1
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)) + Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))
  }

  estimatedTime(peakHour){
  
    let blocks = this.blocksTravelled();
    if (peakHour){
      return blocks/2
    }
    else{
      return blocks/3
    }
  }

}
