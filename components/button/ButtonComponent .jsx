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
  UrlIcon,
  RelativePathUrlImg,
  RTL,
  ImageAlt,

}) {
  return (
    <div className={cx(styles.main, { [styles.RTL]: RTL })}>
      <button type="button" onClick={Onclick} disabled={IsDisabled} className={cx(styles[`${ButtonTheme}Button`], { [styles.borderRadius]: IsRound })} style={backgroundColor && { backgroundColor }}>
        {ButtonLabel}
        {' '}
        <img className={styles.img1} src={RelativePathUrlImg} alt={ImageAlt} />
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
  UrlIcon: PropTypes.string,
  RelativePathUrlImg: PropTypes.string,
  ImageAlt: PropTypes.string,
  RTL: PropTypes.bool,

};

ButtonComponents.defaultProps = {
  ButtonTheme: 'light',
  backgroundColor: null,
  IsDisabled: false,
  IsRound: true,
  Onclick: undefined,
  UrlIcon: '',
  RelativePathUrlImg: '',
  ImageAlt: '',
  RTL: false,

};
