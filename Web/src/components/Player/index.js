import React, { Fragment } from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { Creators as PlayerActions } from '../../store/ducks/player';
import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({
  currentSong, status, play, pause, next, prev, playing, position, duration,
}) => (
  <Container>
    {!!currentSong && (
      <Sound
        url={currentSong.file}
        playStatus={status}
        onFinishedPlaying={next}
        onPlaying={playing}
      />
    )}
    <Current>
      {!!currentSong && (
        <Fragment>
          <img src={currentSong.thumbnail} alt={currentSong.title} />
          <div>
            <span>{currentSong.title}</span>
            <small>{currentSong.author}</small>
          </div>
        </Fragment>
      )}
    </Current>
    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button onClick={prev}>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        {!!currentSong && status === Sound.status.PLAYING ? (
          <button onClick={pause}>
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button onClick={play}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}
        <button onClick={next}>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>
      <Time>
        <span>{position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>{duration}</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  currentSong: propTypes.shape({
    file: propTypes.string,
    thumbnail: propTypes.string,
    title: propTypes.string,
    author: propTypes.string,
  }).isRequired,
  status: propTypes.string.isRequired,
  position: propTypes.string.isRequired,
  duration: propTypes.string.isRequired,
  play: propTypes.func.isRequired,
  pause: propTypes.func.isRequired,
  next: propTypes.func.isRequired,
  prev: propTypes.func.isRequired,
  playing: propTypes.func.isRequired,
};

function msToTime(duration) {
  let seconds = parseInt((duration / 1000) % 60);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  currentSong: state.player.currentSong,
  status: state.player.status,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
});
const mapDispachToProps = dispatch => bindActionCreators(PlayerActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Player);
