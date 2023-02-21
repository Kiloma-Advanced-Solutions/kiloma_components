import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function ButtonComponents({
  ButtonLabel, ButtonTheme, backgroundColor, IsDisabled, Onclick,IsRound

}) {
  return (
    <div>
      <button type="button" onClick={Onclick} disabled={IsDisabled} className={styles[`${ButtonTheme}Button`]} style={backgroundColor && { backgroundColor }}>{ButtonLabel}</button>
    </div>
  );
}

ButtonComponents.propTypes = {
  ButtonLabel: PropTypes.string.isRequired,
  ButtonTheme: PropTypes.oneOf(['dark', 'light']),
  backgroundColor: PropTypes.string,
  IsDisabled: PropTypes.bool,
  IsRound: PropTypes.bool,
  Onclick: PropTypes.func,

};

ButtonComponents.defaultProps = {
  ButtonTheme: 'round',
  backgroundColor: null,
  IsDisabled: false,
  IsRound: false,
  Onclick: undefined,

};
