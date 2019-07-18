import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { Creators as PlayListsDetailsActions } from '../../store/ducks/playlistsDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';
import {
  Container, Header, SongList, SongItem,
} from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import Loading from '../../components/Loading';

class Playlist extends Component {
  state = {
    selectedSong: null,
  };

  static propTypes = {
    getPlaylistsDetailsRequest: propTypes.func.isRequired,
    loadSong: propTypes.func.isRequired,
    playlistsDetails: propTypes.shape({
      id: propTypes.number,
      title: propTypes.string,
      description: propTypes.string,
      thumbnail: propTypes.string,
      songs: propTypes.shape({
        id: propTypes.number,
        title: propTypes.string,
        author: propTypes.string,
        album: propTypes.string,
        duration: propTypes.string,
      }),
    }).isRequired,
    loading: propTypes.bool.isRequired,
    match: propTypes.shape({
      params: propTypes.shape({
        id: propTypes.number,
      }),
    }).isRequired,
    currentSong: propTypes.shape({
      id: propTypes.number,
    }).isRequired,
  };

  componentDidMount() {
    this.loadPlayListDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlayListDetails();
    }
  }

  loadPlayListDetails = () => {
    const { id } = this.props.match.params;
    const { getPlaylistsDetailsRequest } = this.props;
    getPlaylistsDetailsRequest(id);
  };

  renderDetails = () => {
    const { playlistsDetails, loadSong, currentSong } = this.props;
    const { selectedSong } = this.state;
    return (
      <Container>
        <Header>
          <img src={playlistsDetails.thumbnail} alt={playlistsDetails.title} />
          <div>
            <span>playlist</span>
            <h1>{playlistsDetails.title}</h1>
            <p>{`${playlistsDetails.songs ? playlistsDetails.songs.length : 0} músicas`}</p>
            <button>play</button>
          </div>
        </Header>
        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>
              <img src={ClockIcon} alt="Duração" />
            </th>
          </thead>
          <tbody>
            {playlistsDetails.songs ? (
              playlistsDetails.songs.map(music => (
                <SongItem
                  key={music.id}
                  onClick={() => {
                    if (selectedSong === music.id) this.setState({ selectedSong: null });
                    else this.setState({ selectedSong: music.id });
                  }}
                  onDoubleClick={() => {
                    loadSong(music);
                  }}
                  selected={selectedSong === music.id}
                  playing={currentSong && currentSong.id === music.id}
                >
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{music.title}</td>
                  <td>{music.author}</td>
                  <td>{music.album}</td>
                  <td>{music.duration}</td>
                </SongItem>
              ))
            ) : (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    const { loading } = this.props;
    return loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistsDetails: state.playlistsDetails.data,
  loading: state.playlistsDetails.loading,
  currentSong: state.player.currentSong,
});
const mapDispachToProps = dispatch => bindActionCreators({ ...PlayListsDetailsActions, ...PlayerActions }, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Playlist);
