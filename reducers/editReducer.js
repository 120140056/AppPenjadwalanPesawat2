const editReducers = (state = { rows: [] }, action) => {
    switch (action.type) {
      case 'EDIT_ITEM':
        return { ...state, rows: [...action.rows] };
      default:
        return state;
    }
  };
  
  export default editReducers;  