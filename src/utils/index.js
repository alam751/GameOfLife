const rows = 20;
const columns = 30;

// to make empty two dimensional grid

function make2DGrid() {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(columns);
  }
  return arr;
}

// fill each cell of grid randomly with 0 & 1

function fillEachCell() {
  let arr = make2DGrid();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      arr[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return arr;
}
function resetGrid() {
  let arr = make2DGrid();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

export { fillEachCell, make2DGrid, resetGrid };
