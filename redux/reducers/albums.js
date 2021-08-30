const initialState = { post: [] };

const AlbumRedux = (state = initialState, action) => {
  switch (action.type) {
    case "ALBUMS_ARRAY":
      return {
        post: action.payload,
      };
    default:
      return state;
  }
};
export default AlbumRedux;
