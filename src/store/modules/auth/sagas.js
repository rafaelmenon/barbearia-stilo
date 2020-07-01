import { all, takeLatest, call, put } from "redux-saga/effects";
import { decode } from "jsonwebtoken";

import api from "../../../services/api";

import { signInSuccess, signFailure, signOut } from "./actions";

function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, "/sessions", { email, password });

    const user = {
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
    };

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    yield put(signInSuccess(response.data.token, user));
  } catch (error) {
    yield put(signFailure());
  }
}

function* setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    const { exp: tokenExpiration } = decode(token);
    if (tokenExpiration <= Math.floor(Date.now() / 1000))
      return yield put(signOut());

    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("persist/REHYDRATE", setToken),
]);
