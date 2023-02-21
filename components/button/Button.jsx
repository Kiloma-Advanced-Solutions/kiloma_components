import React from 'react';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';
import styles from './Button.module.css';

export default function ButtonComponents({
  ButtonLabel, ButtonTheme, backgroundColor, Disabled,

}) {
  return (
    <div>
      <button type="button" disabled={Disabled} className={styles[`${ButtonTheme}Button`]} style={backgroundColor && { backgroundColor }}>{ButtonLabel}</button>
    </div>
  );
}

ButtonComponents.propTypes = {
  ButtonLabel: PropTypes.string.isRequired,
  ButtonTheme: PropTypes.oneOf(['round', 'dark', 'light']),
  backgroundColor: PropTypes.string,
  Disabled: PropTypes.bool,
};

ButtonComponents.defaultProps = {
  ButtonTheme: 'round',
  backgroundColor: null,
  Disabled: false,

};
