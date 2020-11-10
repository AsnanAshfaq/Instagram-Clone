export const InitialState = {
  user: {},
};

const Reducer = (state, action) => {
  switch (action.type) {
    // adding user
    case "SET_USER":
      return { ...state, user: action.user };
    case "REMOVE_USER":
      return { ...state, user: {} };
    default:
      return state;
  }
};

export default Reducer;
