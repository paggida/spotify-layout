import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { Creators as PlayListsActions } from '../../store/ducks/playlists';
import { Container, NewPlayList, Nav } from './styles';
import addPlayListIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  static propTypes = {
    getPlayListsRequest: propTypes.func.isRequired,
    playLists: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        title: propTypes.string,
        description: propTypes.string,
        thumbnail: propTypes.string,
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { getPlayListsRequest } = this.props;
    getPlayListsRequest();
  }

  render() {
    const { playLists } = this.props;
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="">Rádio</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>Sua biblioteca</span>
            </li>
            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados recentemente</a>
            </li>
            <li>
              <a href="">Músicas</a>
            </li>
            <li>
              <a href="">Álbuns</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos locais</a>
            </li>
            <li>
              <a href="">Vídeos</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>Playlists</span>
            </li>
            {playLists.map(list => (
              <li key={list.id}>
                <Link to={`/playlists/${list.id}`}>{list.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlayList>
          <img src={addPlayListIcon} alt="Adicionar playlist" />
          Nova Playlist
        </NewPlayList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playLists: state.playlists.data,
});
const mapDispachToProps = dispatch => bindActionCreators(PlayListsActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Sidebar);
