import React from 'react';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';
import styles from './Button.module.css';

export default function ButtonComponents({
  buttonLabel, ButtonTheme, backgroundColor,

}) {
  return (
    <div>
      <button type="button" className={styles[`${ButtonTheme}Button`]} style={backgroundColor && { backgroundColor }}>{buttonLabel}</button>
    </div>
  );
}

ButtonComponents.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  ButtonTheme: PropTypes.oneOf(['round', 'dark', 'light']),
  backgroundColor: string,
};

ButtonComponents.defaultProps = {
  ButtonTheme: 'round',
  backgroundColor: null,

};
