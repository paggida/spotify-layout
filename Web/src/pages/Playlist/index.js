import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { Creators as PlayListsDetailsActions } from '../../store/ducks/playlistsDetails';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import Loading from '../../components/Loading';

class Playlist extends Component {
  static propTypes = {
    getPlaylistsDetailsRequest: propTypes.func.isRequired,
    playlistsDetails: propTypes.shape({
      id: propTypes.number,
      title: propTypes.string,
      description: propTypes.string,
      thumbnail: propTypes.string,
    }).isRequired,
    loading: propTypes.bool.isRequired,
    match: propTypes.shape({
      params: propTypes.shape({
        id: propTypes.number,
      }),
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
    const { id } = this.props.match.params; /* captura os parametros via react routes */
    const { getPlaylistsDetailsRequest } = this.props;
    getPlaylistsDetailsRequest(id);
  };

  renderDetails = () => {
    const { playlistsDetails } = this.props;
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
                <tr key={music.id}>
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{music.title}</td>
                  <td>{music.author}</td>
                  <td>{music.album}</td>
                  <td>{music.duration}</td>
                </tr>
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
});
const mapDispachToProps = dispatch => bindActionCreators(PlayListsDetailsActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Playlist);
