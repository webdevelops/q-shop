const initialState = {
  token: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'AUTH_SUCCESS':
      return { ...state, token: payload };

    case 'AUTH_LOGOUT':
      return { ...state, token: null };

    default:
      return state;
  }
};