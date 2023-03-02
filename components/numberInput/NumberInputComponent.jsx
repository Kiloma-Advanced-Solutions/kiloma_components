import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './NumberInputComponent.module.css';

function NumberInputComponent({
  LabelText,
  MinLength,
  MaxLength,
  Step,
  Size,
  Disabled,
  IsRTL,
  LabelColor,
  InputBackGroundColor,
  IsWithComma,
  InputWidthSize,
  IsTextCenter,
}) {
  const [value, setValue] = useState(0);
  // This function help to add the comma every 3 digits
  const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, '');
  const handleChange = (event) => setValue(addCommas(removeNonNumeric(event.target.value)));

  const handleChangeWithOutComma = (event) => {
    setValue(event.target.value);
  };

  const InputBackGroundColorStyle = InputBackGroundColor
    ? { backgroundColor: InputBackGroundColor } : {};

  const LabelColorStyle = LabelColor ? { color: LabelColor } : {};
  const InputWidthSizeStyle = InputWidthSize ? { width: `${InputWidthSize}%` } : {};
  const TextCenterSize = IsTextCenter ? { textAlign: 'center' } : {};
  return (
    <div className={cx(styles.container, { [styles.RTL]: IsRTL })}>
      <label htmlFor="numberInput" className={styles.label} style={{ ...LabelColorStyle }}>
        {LabelText}
        <input type={IsWithComma ? 'text' : 'number'} value={value} onInput={IsWithComma ? handleChange : handleChangeWithOutComma} min={MinLength} max={MaxLength} step={Step} disabled={Disabled} size={Size} className={cx({ [styles.disabled]: Disabled }, [styles.input_style], [styles.LTR])} style={{ ...InputBackGroundColorStyle, ...InputWidthSizeStyle, ...TextCenterSize }} />
      </label>
    </div>
  );
}

NumberInputComponent.propTypes = {
  LabelText: PropTypes.string,
  MinLength: PropTypes.number,
  MaxLength: PropTypes.number,
  Step: PropTypes.number,
  Size: PropTypes.string,
  Disabled: PropTypes.bool,
  LabelColor: PropTypes.string,
  InputBackGroundColor: PropTypes.string,
  IsRTL: PropTypes.bool,
  IsWithComma: PropTypes.bool,
  InputWidthSize: PropTypes.number,
  IsTextCenter: PropTypes.bool,
};
// Size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),

NumberInputComponent.defaultProps = {
  LabelText: '',
  MinLength: null,
  MaxLength: null,
  Step: null,
  Size: '',
  Disabled: false,
  LabelColor: '',
  InputBackGroundColor: '',
  IsRTL: false,
  IsWithComma: true,
  InputWidthSize: null,
  IsTextCenter: false,

};

export default NumberInputComponent;
