const deleteReducers = (state = { rows: [] }, action) => {
    switch (action.type) {
      case 'DELETE_ITEM':
        return { ...state, rows: [...action.rows] };
      default:
        return state;
    }
  };
  
  export default deleteReducers;  