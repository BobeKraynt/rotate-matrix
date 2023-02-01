let rotate = function(matrix) {
 const rows = matrix.length;
  for (let i = 0; i < rows; i++) {
    for (let x = i + 1; x < rows; x++) {
      [matrix[i][x], matrix[x][i]] = [matrix[x][i], matrix[i][x]];
    }
  }
  for (let i = 0; i < rows; i++) {
    matrix[i].reverse();
  }
};

rotate([[1,2,3],[4,5,6],[7,8,9]]);