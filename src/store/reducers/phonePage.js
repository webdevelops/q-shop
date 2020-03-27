const initialState = {
  id: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_PHONE_BY_ID_SUCCESS':
      return { ...state, id: payload.id };

    default:
      return state;
  }
};