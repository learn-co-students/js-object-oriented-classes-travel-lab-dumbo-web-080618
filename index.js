class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date (startDate);
    
  }
  
 yearsExperienceFromBeginningOf(endDate){
   

 return parseInt(endDate) -  parseInt(this.startDate.getFullYear()) -1;
  
   
 }
  
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
    
    console.log(this.endingLocation.vertical);
  } 
 
 
 blocksTravelled(){
   let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
   const vertical = this.endingLocation.vertical - this.beginningLocation.vertical;
   
  const horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
  
  return horizontal + vertical;
   
 }
  
  estimatedTime(peek){
    if(peek == undefined){
      return this.blocksTravelled() / 3;
    }
    else{
      return this.blocksTravelled() / 2;
    }
    
  }
    
  }
 
 

