export const reducer = (state, action) => {
  if (action.type === "RANDOM") {
    console.log(state);
    console.log(action);
    return {
      ...state,
      arr: state.nextArr,
    };
  }
  return state;
};
