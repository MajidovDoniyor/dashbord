const initialState = { post: [] };

const PostsRedux = (state = initialState, action) => {
  switch (action.type) {
    case "POST_ARRAY":
      return {
        post: action.payload,
      };
    default:
      return state;
  }
};
export default PostsRedux;
