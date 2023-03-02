import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './NumberInputComponent.module.css';

function NumberInputComponent({
  LabelText, MinLength, MaxLength, Step, Size, Disabled, IsRTL, LabelColor, InputBackGroundColor,
}) {
  const [value, setValue] = useState(0);

  const InputBackGroundColorStyle = InputBackGroundColor
    ? { backgroundColor: InputBackGroundColor } : {};

  const LabelColorStyle = LabelColor ? { color: LabelColor } : {};

  const handleChange = (event) => {
    setValue(event.target.value.toLocaleString('en'));
  };

  return (
    <div className={cx(styles.container, { [styles.RTL]: IsRTL })}>
      <label htmlFor="numberInput" className={styles.label} style={{ ...LabelColorStyle }}>
        {LabelText}
        <input type="number" value={value} onChange={handleChange} min={MinLength} max={MaxLength} step={Step} disabled={Disabled} size={Size} className={cx({ [styles.disabled]: Disabled }, [styles.input_style], [styles.LTR])} style={{ ...InputBackGroundColorStyle }} />
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

};

export default NumberInputComponent;
