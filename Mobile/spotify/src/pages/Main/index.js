import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import PodcastsActions from '~/store/ducks/podcasts';
import {
  Container, PodcastList, PageTitle, Podcast, Cover, Info, Title, Count,
} from './styles';

class Main extends Component {
  static propTypes = {
    loadRequest: propTypes.func.isRequired,
    navigation: propTypes.shape({
      navigate: propTypes.func,
    }).isRequired,
    podcasts: propTypes.shape({
      data: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.number,
          title: propTypes.string,
          cover: propTypes.string,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  handlePodcastPress(podcast) {
    const { navigation } = this.props;
    navigation.navigate('Podcast', { podcast });
  }

  render() {
    const { podcasts } = this.props;
    return (
      <Container>
        <PodcastList
          ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({ item: podcast }) => (
            <Podcast onPress={() => this.handlePodcastPress(podcast)}>
              <Cover source={{ uri: podcast.cover }} />
              <Info>
                <Title>{podcast.title}</Title>
                <Count>{`${podcast.tracks.length} episódios`}</Count>
              </Info>
            </Podcast>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  podcasts: state.podcasts,
});
const mapDispachToProps = dispatch => bindActionCreators(PodcastsActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Main);
