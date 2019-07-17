import { combineReducers } from 'redux';
import playlists from './playlists';
import playlistsDetails from './playlistsDetails';

export default combineReducers({ playlists, playlistsDetails });
