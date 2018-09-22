class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endYear){
    return endYear - this.startDate.getFullYear() -1
  }
}

// Route
class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
 
// blocksTravelled — returns an integer with the number of blocks travelled. In New York City, to travel East and West you cross avenues, and to travel North and South you cross streets. To calculate the distance of in streets, you can use subtraction (eg. 13th street to 10th street is three blocks). To calculate the distance of avenues travelled, you will need to know the names and order of avenues in New York City. You can use the following array to help with your calculation:
// let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  blocksTravelled(){
    return this.getVerticalDistance() + this.getHorizontalDistance()
  }

  getVerticalDistance(){
    return Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))
  }

  getHorizontalDistance() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return Math.abs(eastWest.indexOf( this.beginningLocation.horizontal) - eastWest.indexOf( this.endingLocation.horizontal))
  }

  estimatedTime(peakHours=false){
    return peakHours? 
       Math.round(this.blocksTravelled()/2) 
      : Math.round(this.blocksTravelled()/3)
  }
}
// A route is initialized with two arguments, a beginningLocation and an endingLocation. Both of these arguments are JavaScript objects with an attributes of horizontal and vertical.


// So to travel from 15th Street and 1st Avenue to 20th Street and Lexington Avenue is to travel eight blocks (five blocks North and three blocks West).

// estimatedTime — The method returns the number of minutes estimated for the trip. The estimated time depends on the distance in blocks and whether the trip is occurring during peak hours or off peak hours. During off peak hours, a driver travels three blocks in a minute, while during peak hours a driver travels an estimated two blocks in a minute.

