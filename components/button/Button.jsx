import React from 'react';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';
import styles from './Button.module.css';

export default function ButtonComponents({
  ButtonLabel, ButtonTheme, BackgroundColor,

}) {
  return (
    <div>
      <button type="button" className={styles[`${ButtonTheme}Button`]} style={BackgroundColor && { BackgroundColor }}>{ButtonLabel}</button>
    </div>
  );
}

ButtonComponents.propTypes = {
  ButtonLabel: PropTypes.string.isRequired,
  ButtonTheme: PropTypes.oneOf(['round', 'dark', 'light']),
  BackgroundColor: string,
};

ButtonComponents.defaultProps = {
  ButtonTheme: 'round',
  BackgroundColor: null,

};
