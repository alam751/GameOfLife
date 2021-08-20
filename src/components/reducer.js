export const reducer = (state, action) => {
  if (action.type === "RANDOM") {
    return {
      ...state,
      arr: action.payload,
    };
  } else if (action.type === "TOGGLE") {
    const [row, column] = action.payload.split("-");

    return {
      ...state,
      arr: state.arr.map((rows, rowsIndex) => {
        return rows.map((columns, columnsIndex) => {
          if (
            rowsIndex === parseInt(row) &&
            columnsIndex === parseInt(column)
          ) {
            return !state.arr[rowsIndex][columnsIndex];
          }
          return state.arr[rowsIndex][columnsIndex];
        });
      }),
    };
  }
  return state;
};
