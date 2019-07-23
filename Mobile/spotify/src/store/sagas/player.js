import { call, put } from 'redux-saga/effects';
import TrackPlayer from 'react-native-track-player';
import PlayerActions from '~/store/ducks/player';

export function* init() {
  yield call(TrackPlayer.setupPlayer); // Inicia o player
  TrackPlayer.addEventListener('playback-track-changed', console.tron.log); // Escuta dois eventos para interação
  TrackPlayer.addEventListener('playback-state', console.tron.log);
}
export function* setPodcast({ podcast, episodeId }) {
  yield call(TrackPlayer.add, [...podcast.tracks]); // Adiciona o podcast na fila de reprodução, criando um novo pela lei da imutabilidade
  yield call(TrackPlayer.play); // Inicia a pilha de músicas

  yield put(PlayerActions.setPodcastSuccess(podcast));
}
