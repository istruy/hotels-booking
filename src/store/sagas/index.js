import { fectchHotelsList } from "../api-actions";
import { takeEvery, call, put } from "redux-saga/effects";
import { GET_HOTEL_LIST } from "../../utils/const";
import {
  putCheckInInformation,
  putHotelList,
} from "../hotels-list/hotels-data";

export function* workerSaga(action) {
  const data = yield call(fectchHotelsList, action.data);
  yield put(putCheckInInformation(action.data));
  yield put(putHotelList(data));
}

export function* watchClickSaga() {
  yield takeEvery(GET_HOTEL_LIST, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
