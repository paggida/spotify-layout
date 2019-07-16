import { all, takeLatest } from 'redux-saga/effects';
import { Types as PlaylistsTypes } from '../ducks/playlists';
import { getPlayLists } from './playlists';

export default function* rootSaga() {
  yield all([takeLatest(PlaylistsTypes.GET_REQUEST, getPlayLists)]);
}
