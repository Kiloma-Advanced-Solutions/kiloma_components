import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './ButtonComponent.module.css';

export default function ButtonComponents({
  ButtonLabel,
  ButtonTheme,
  backgroundColor,
  IsDisabled,
  Onclick,
  IsRound,
  Icon,

}) {
  return (
    <div className={styles.main}>
      <button type="button" onClick={Onclick} disabled={IsDisabled} className={cx(styles[`${ButtonTheme}Button`], { [styles.borderRadius]: IsRound })} style={backgroundColor && { backgroundColor }}>
        {' '}
        {ButtonLabel}
        {' '}
      </button>
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
  Icon: PropTypes.func,

};

ButtonComponents.defaultProps = {
  ButtonTheme: 'light',
  backgroundColor: null,
  IsDisabled: false,
  IsRound: true,
  Onclick: undefined,
  Icon: undefined,

};
