import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as PlayListsDetailsActions } from '../ducks/playlistsDetails';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlayListsDetails({ payload: { id } }) {
  try {
    const { data } = yield call(api.get, `/playlists/${id}?_embed=songs`);
    yield put(PlayListsDetailsActions.getPlaylistsDetailsSuccess(data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possivel obter os detalhes da playlist'));
  }
}
