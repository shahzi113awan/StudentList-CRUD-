import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { studentLis } from "./reducers/studentListReducer";
import { createLists } from "./reducers/createListReducer";
import { UpdateList } from "./reducers/updateList";
const reducer = combineReducers({
  studentLis,
  createLists,
  UpdateList,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
