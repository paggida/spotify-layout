import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { Creators as PlayListsActions } from '../../store/ducks/playlists';
import {
  Container, Title, List, Playlist,
} from './styles';

class Browse extends Component {
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
        <Title>Navegar</Title>
        <List>
          {playLists.map(list => (
            <Playlist key={list.id} to={`/playlist/${list.id}`}>
              <img src={list.thumbnail} alt={list.title} />
              <strong>{list.title}</strong>
              <p>{list.description}</p>
            </Playlist>
          ))}
        </List>
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
)(Browse);
