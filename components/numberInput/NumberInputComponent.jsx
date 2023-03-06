import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './NumberInputComponent.module.css';

function NumberInputComponent({
  LabelText,
  Step,
  Disabled,
  IsRTL,
  LabelColor,
  InputBackGroundColor,
  IsWithComma,
  InputWidthSize,
  IsTextCenter,
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    const newValue = event.target.value.replace(/[^\d]/g, '');
    const formattedValue = parseInt(newValue, 10).toLocaleString();
    setValue(formattedValue);
  };
  const handleChangeWithOutComma = (event) => {
    setValue(event.target.value);
  };

  const addValue = () => {
    if (Step) {
      setValue((prevValue) => {
        if (!IsWithComma) {
          return Number(Number(prevValue) + Step);
        }
        const newValue = Number((`${prevValue}`).replace(/[^\d]/g, '')) + Step;
        return parseInt(newValue, 10).toLocaleString();
      });
    } else {
      setValue((prevValue) => Number(prevValue + 1));
    }
  };
  const decreaseValue = () => {
    if (Step) {
      setValue((prevValue) => {
        if (!IsWithComma) {
          return Number(Number(prevValue) - Step);
        }
        const newValue = Number((`${prevValue}`).replace(/[^\d]/g, '')) - Step;
        return parseInt(newValue, 10).toLocaleString();
      });
    } else {
      setValue((prevValue) => Number(prevValue - 1));
    }
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
        <div className={styles.button_div}>
          <input
            type="text"
            value={value}
            onInput={IsWithComma ? handleChange : handleChangeWithOutComma}
            step={Step}
            disabled={Disabled}
            className={cx({ [styles.disabled]: Disabled }, [styles.input_style], [styles.LTR])}
            style={{ ...InputBackGroundColorStyle, ...InputWidthSizeStyle, ...TextCenterSize }}
          />
          <div className={styles.inside_div_button}>
            <button className={cx({ [styles.disabled]: Disabled }, [styles.plus_input_button])} type="button" onClick={addValue}>+</button>
            <button className={cx({ [styles.disabled]: Disabled }, [styles.minus_input_button])} type="button" onClick={decreaseValue}>-</button>

          </div>
        </div>
      </label>
    </div>
  );
}

NumberInputComponent.propTypes = {
  LabelText: PropTypes.string,
  Step: PropTypes.number,
  Disabled: PropTypes.bool,
  LabelColor: PropTypes.string,
  InputBackGroundColor: PropTypes.string,
  IsRTL: PropTypes.bool,
  IsWithComma: PropTypes.bool,
  InputWidthSize: PropTypes.number,
  IsTextCenter: PropTypes.bool,
};

NumberInputComponent.defaultProps = {
  LabelText: '',
  Step: null,
  Disabled: false,
  LabelColor: '',
  InputBackGroundColor: '',
  IsRTL: false,
  IsWithComma: true,
  InputWidthSize: null,
  IsTextCenter: false,

};

export default NumberInputComponent;
