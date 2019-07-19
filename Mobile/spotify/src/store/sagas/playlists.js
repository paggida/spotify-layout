import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as PlayListsActions } from '../ducks/playlists';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlayLists() {
  try {
    const { data } = yield call(api.get, '/playlists');
    yield put(PlayListsActions.getPlayListsSuccess(data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possivel obter as playlists'));
  }
}
