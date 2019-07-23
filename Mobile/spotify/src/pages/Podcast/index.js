import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlayerActions from '~/store/ducks/player';
import {
  Container,
  EpisodeList,
  PodcastDetails,
  Background,
  BackButton,
  Cover,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  Episode,
  Title,
  Author,
} from './styles';

class Podcast extends Component {
  static propTypes = {
    navigation: propTypes.shape({
      getParam: propTypes.func,
    }).isRequired,
    setPodcastRequest: propTypes.func.isRequired,
    player: propTypes.shape({}).isRequired,
  };

  componentDidMount() {}

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handlePlay = () => {
    const { setPodcastRequest, navigation } = this.props;
    const podcast = navigation.getParam('podcast');
    setPodcastRequest(podcast);
  };

  render() {
    const { navigation } = this.props;
    const podcast = navigation.getParam('podcast');

    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background source={{ uri: podcast.cover }} blurRadius={5} />
              <BackButton onPress={this.handleBack}>
                <Icon name="arrow-back" size={24} color="#FFF" />
              </BackButton>
              <Cover source={{ uri: podcast.cover }} />
              <PodcastTitle>{podcast.title}</PodcastTitle>
              <PlayButton onPress={this.handlePlay}>
                <PlayButtonText>REPRODUZIR</PlayButtonText>
              </PlayButton>
            </PodcastDetails>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode>
              <Title>{episode.title}</Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  player: state.player,
});
const mapDispachToProps = dispatch => bindActionCreators(PlayerActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Podcast);
