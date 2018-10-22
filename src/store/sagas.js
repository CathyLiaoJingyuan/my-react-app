import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";
import axios from "axios";

function* getIntitList() {
  const res = yield axios.get("/todolist.json");
  const action = initListAction(res.data);
  yield put(action);
  //   console.log(action);
  //   console.log(res.data);
  //   yield put(action);
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getIntitList);
}

export default mySaga;
