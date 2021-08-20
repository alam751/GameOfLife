const rows = 20;
const columns = 30;

// to make empty two dimensional grid

function make2DGrid(columns, rows) {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(columns);
  }
  return arr;
}

// fill each cell of grid randomly with 0 & 1

function fillEachCell() {
  let arr = make2DGrid(columns, rows);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      arr[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return arr;
}

let next;
next = fillEachCell();
let updateArray = make2DGrid(columns, rows);

// compute next generation  of grid

function nextGenerationGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let state = next[i][j];

      // count live neighbours

      let neighbours = countNeighbours(next, i, j);

      if (state === 0 && neighbours === 3) {
        updateArray[i][j] = 1;
      } else if (state === 1 && (neighbours < 2 || neighbours > 3)) {
        updateArray[i][j] = 0;
      } else {
        updateArray[i][j] = state;
      }
    }
  }
  next = updateArray;

  updateArray = make2DGrid(columns, rows);

  return next;
}

function countNeighbours(array, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let row = (x + i + rows) % rows;
      let col = (y + j + columns) % columns;
      if (row === x && col === y) {
        continue;
      }

      sum += array[row][col];
    }
  }
  return sum;
}

export { fillEachCell, nextGenerationGrid };
