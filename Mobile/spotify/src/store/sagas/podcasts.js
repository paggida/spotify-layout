import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import PodcastsActions from '~/store/ducks/podcasts';

export function* load() {
  try {
    const { data } = yield call(api.get, '/podcasts');
    yield put(PodcastsActions.loadSuccess(data));
  } catch (err) {
    yield put(PodcastsActions.loadFailure());
  }
}
