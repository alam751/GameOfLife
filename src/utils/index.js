const rows = 30;
const columns = 30;

function make2DArray(columns, rows) {
  let arr = new Array(columns);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function fillEachCell() {
  let array = make2DArray(columns, rows);
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      array[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return array;
}

// compute next based on grid

function nextGenerationArr() {
  let next = fillEachCell();
  let updateArray = make2DArray();
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let state = next[i][j];
      console.log(state);

      // count live neighbours

      let neighbours = countNeighbours(next, i, j);
      console.log(neighbours);

      if (state === 0 && neighbours === 3) {
        return updateArray[i][j] === 1;
      } else if ((state === 1 && neighbours < 2) || neighbours > 3) {
        return updateArray[i][j] === 0;
      } else {
        return updateArray[i][j] === state;
      }
    }
  }
  return updateArray;
}

function countNeighbours(array, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + columns) % columns;
      let row = (y + j + rows) % rows;

      sum += array[col][row];
    }
  }
  return sum;
}

export { nextGenerationArr, fillEachCell };
