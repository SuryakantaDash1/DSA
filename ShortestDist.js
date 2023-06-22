function getshortestDist(inputdist) {
    var distances = inputdist.split(" ");
    var m = parseInt(distances[0]);
    var n = parseInt(distances[1]);
  
    var distance = Math.sqrt(m * m + n * n);
    return distance;
  }
  
  var inputdist = process.openStdin();
  var distance = getshortestDist(inputdist);
  console.log(distance.toFixed(2));
  

// function getshortestDist(inputdist) {
//     var distances = inputdist.split(" ");
//     var m = parseInt(distances[0]);
//     var n = parseInt(distances[1]);
  
//     var distance = Math.sqrt(m * m + n * n);
//     return distance;
//   }
  
//   var inputdist = "3 4"; // Sample input provided as a string
//   var distance = getshortestDist(inputdist);
//   console.log(distance.toFixed(2));
  