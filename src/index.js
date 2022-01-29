
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if(matrix) {
    let resultArr = [];
      
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
        let columnIndex;
        if(i%2 === 0){
          columnIndex = j;
        } else {
          columnIndex = matrix[i].length - j - 1;
        }
        resultArr.push(matrix[i][columnIndex]);
      }
    }
    return resultArr;
  } else {
    return [];
  }
}
