import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import PostsRedux from "./reducers/posts";
import AlbumRedux from "./reducers/albums";
import UsersRedux from "./reducers/users";

const midlevari = [thunk];

const store = createStore(
  combineReducers({ PostsRedux, AlbumRedux, UsersRedux }),
  composeWithDevTools(applyMiddleware(...midlevari))
);

const dispatch = store.dispatch;

export { dispatch };

export default store;
