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
  PathForImage,
  RTL,
  ImageAlt,
  IsShaded,
  ShadowColor,
}) {
  const backgroundColorStyles = backgroundColor ? { backgroundColor } : {};
  const shadowColorStyles = ShadowColor && IsShaded ? { boxShadow: `0px 0px 5px ${ShadowColor}` } : {};

  return (
    <div className={cx(styles.main, { [styles.RTL]: RTL })}>
      <button type="button" onClick={Onclick} disabled={IsDisabled} className={cx(styles[`${ButtonTheme}Button`], { [styles.borderRadius]: IsRound, [styles.button_shadow]: IsShaded, [styles.RTL_Label]: RTL })} style={{ ...backgroundColorStyles, ...shadowColorStyles }}>
        {PathForImage
          ? (
            <img
              src={PathForImage}
              alt={ImageAlt}
              className={styles.icon_img}
            />
          )
          : null}
        {ButtonLabel}
        {' '}
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
  PathForImage: PropTypes.string,
  ImageAlt: PropTypes.string,
  RTL: PropTypes.bool,
  IsShaded: PropTypes.bool,
  ShadowColor: PropTypes.string,

};

ButtonComponents.defaultProps = {
  ButtonTheme: 'light',
  backgroundColor: null,
  IsDisabled: false,
  IsRound: true,
  Onclick: undefined,
  PathForImage: '',
  ImageAlt: '',
  RTL: false,
  IsShaded: false,
  ShadowColor: null,

};
