import { combineReducers } from 'redux';
import playlists from './playlists';
import playlistsDetails from './playlistsDetails';
import player from './player';
import error from './error';

export default combineReducers({
  playlists, playlistsDetails, player, error,
});
