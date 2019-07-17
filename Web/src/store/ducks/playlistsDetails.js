/**
 * Action Types
 */
export const Types = {
  GET_REQUEST: 'playlistsDetails/GET_REQUEST',
  GET_SUCCESS: 'playlistsDetails/GET_SUCCESS',
};
/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: {},
};
export default function playlistsDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    default:
      return state;
  }
}
/**
 * Action creators
 */
export const Creators = {
  getPlaylistsDetailsRequest: id => ({ type: Types.GET_REQUEST, payload: { id } }),
  getPlaylistsDetailsSuccess: data => ({ type: Types.GET_SUCCESS, payload: { data } }),
};
