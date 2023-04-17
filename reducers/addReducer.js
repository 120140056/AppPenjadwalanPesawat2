import { ADD_ITEM } from '../actions/addAction';

const initialState = {
  rows: [
    { asal: 'CGK', tujuan: 'DPS', tanggal: '2023-03-20', merk: 'Garuda Indonesia' },
    { asal: 'DPS', tujuan: 'CGK', tanggal: '2023-03-22', merk: 'Citilink' },
    { asal: 'SUB', tujuan: 'CGK', tanggal: '2023-03-23', merk: 'Lion Air' }
  ],
};

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        rows: [...state.rows, action.payload],
      };
    default:
      return state;
  }
};

export default addReducer;