import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import propTypes from 'prop-types';
import { Creators as ErrorActions } from '../../store/ducks/error';
import { Container } from './styles';
import CloseIcon from '../../assets/images/close.svg';

const ErrorBox = ({ message, visible, hideError }) => visible && (
<Container>
  <p>{message}</p>
  <button onClick={hideError}>
    <img src={CloseIcon} alt="Fechar" />
  </button>
</Container>
);

ErrorBox.propTypes = {
  hideError: propTypes.func.isRequired,
  visible: propTypes.bool.isRequired,
  message: propTypes.string.isRequired,
};

const mapStateToProps = state => ({
  visible: state.error.visible,
  message: state.error.message,
});
const mapDispachToProps = dispatch => bindActionCreators(ErrorActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(ErrorBox);
