const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, authError: null };
    case "LOGIN_ERROR":
      return { ...state, authError: action.error.message };
    case "REGISTER_SUCCESS":
      return { ...state, authError: null };
    case "REGISTER_ERROR":
      return { ...state, authError: action.error.message };
    case "LOGOUT":
      return state;
    default:
      return state;
  }
};

export default authReducer;
