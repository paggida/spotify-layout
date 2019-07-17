import { all, takeLatest } from 'redux-saga/effects';
import { Types as PlaylistsTypes } from '../ducks/playlists';
import { Types as PlaylistsDetailsTypes } from '../ducks/playlistsDetails';
import { getPlayLists } from './playlists';
import { getPlayListsDetails } from './playlistsDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlayLists),
    takeLatest(PlaylistsDetailsTypes.GET_REQUEST, getPlayListsDetails),
  ]);
}
