export const deleteItem = (item) => {
    return (dispatch, getState) => {
      const { rows } = getState();
      const index = rows.findIndex((row) => {
        return (
          row.asal === item.asal &&
          row.tujuan === item.tujuan &&
          row.tanggal === item.tanggal &&
          row.merk === item.merk
        );
      });
      if (index !== -1) {
        rows.splice(index, 1);
        dispatch({ type: 'DELETE_ITEM', rows });
      }
    };
  };  