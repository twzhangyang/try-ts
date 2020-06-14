import * as actions from './actionTypes';

let lastId = 0;

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVE:
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;