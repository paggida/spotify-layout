import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as PlayListsActions } from '../ducks/playlists';

export function* getPlayLists() {
  try {
    const { data } = yield call(api.get, '/playlists');
    yield put(PlayListsActions.getPlayListsSuccess(data));
  } catch (err) {
    // yield put(PlayListsActions.addDevsFailure('Erro no acesso da API!'));
  }
}
