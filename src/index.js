
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resArray = [];
  if(typeof matrix !== 'undefined' && matrix.length != 0) {
    matrix.forEach(function(element, index) {
      if(index%2 == 0) {
        resArray = resArray.concat(element);
      } else {
        resArray = resArray.concat(element.reverse());
      }
      
    });
  }

  
  return resArray;

}
