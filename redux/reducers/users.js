const initialState = { post: [] };

const UsersRedux = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_ARRAY":
      return {
        post: action.payload,
      };
    default:
      return state;
  }
};
export default UsersRedux;
