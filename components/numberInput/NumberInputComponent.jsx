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
  ShowControlButton,
  MinLength,
  MaxLength,
  PlaceHolder,
  IsDouble,
  DecimalDotPlace,
}) {
  const [value, setValue] = useState(0);
  const allowedChar = /[^0-9.,-]/;
  const errorMessage = `The character ${allowedChar} can appear only once`;

  const handleChange = (event) => {
    const inputValue = event.target.value;
    let newValue = inputValue.replace(/[^0-9+]|^-/g, (match, offset) => {
      if (offset === 0 && match === '-') {
        return match;
      }
      return '';
    });
    const charCount = (newValue.match(new RegExp(allowedChar, 'g')) || []).length;
    if (charCount > 1) {
      event.preventDefault();
      console.log(errorMessage);
    } else {
      if (newValue.length > 3) {
        const splitValue = newValue.split('.');
        splitValue[0] = splitValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        newValue = splitValue.join('.');
      }
      setValue(newValue);
    }
  };
  const handleChangeWithDecimal = (e) => {
    const inputValue = e.target.value;
    let decimalValue = inputValue;
    const newValue = inputValue.replace(/[^0-9+]|^-/g, (match, offset) => {
      if (offset === 0 && match === '-') {
        return match;
      }
      return '';
    });
    if (IsDouble) {
      decimalValue = `${newValue.slice(0, -DecimalDotPlace)}.${newValue.slice(-DecimalDotPlace)}`;
      setValue(decimalValue);
    } else {
      setValue(newValue);
    }
  };

  const addValue = (decimalSeparator = ',') => {
    if (Step) {
      setValue((prevValue) => {
        let newValue;
        if (!IsWithComma) {
          newValue = Number(prevValue) + Step;
        } else {
          let cleanValue = `${prevValue}`.replace(/[^\d-]/g, '');
          if (decimalSeparator === '.') {
            cleanValue = cleanValue.replace(',', '.');
          }
          newValue = Number(cleanValue) + Step;
          if (decimalSeparator === ',') {
            newValue = parseInt(newValue, 10).toLocaleString();
          } else {
            newValue = newValue.toLocaleString();
          }
        }
        return newValue;
      });
    } else {
      setValue((prevValue) => Number(prevValue + 1));
    }
  };
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const decreaseValue = () => {
    if (Step) {
      setValue((prevValue) => {
        let newValue;
        if (!IsWithComma) {
          newValue = Number(prevValue) - Step;
        } else {
          newValue = Number((`${prevValue}`).replace(/[^\d-]/g, '')) - Step;
          newValue = numberWithCommas(newValue);
        }
        return newValue;
      });
    } else {
      setValue((prevValue) => {
        let newValue;
        if (!IsWithComma) {
          newValue = Number(prevValue) - 1;
        } else {
          newValue = Number((`${prevValue}`).replace(/[^\d-]/g, '')) - 1;
          newValue = numberWithCommas(newValue);
        }
        return newValue;
      });
    }
  };
  const handleOnKey = (event) => {
    if (event.keyCode === 40) {
      decreaseValue();
    }
    if (event.keyCode === 38) {
      addValue();
    }
  };
  const InputBackGroundColorStyle = InputBackGroundColor
    ? { backgroundColor: InputBackGroundColor } : {};

  const LabelColorStyle = LabelColor ? { color: LabelColor } : {};
  const InputWidthSizeStyle = InputWidthSize ? { width: `${InputWidthSize}` } : {};
  const TextCenterSize = IsTextCenter ? { textAlign: 'center' } : {};

  return (
    <div className={cx(styles.container, { [styles.RTL]: IsRTL })}>
      <label htmlFor="numberInput" className={styles.label} style={{ ...LabelColorStyle }}>
        {LabelText}
        <div
          className={styles.button_div}
          style={{ ...InputWidthSizeStyle }}
        >
          <input
            onKeyDown={handleOnKey}
            type="text"
            pattern="[^-]+[^0-9]+"
            value={value}
            onInput={IsWithComma ? handleChange : handleChangeWithDecimal}
            step={Step}
            disabled={Disabled}
            minLength={MinLength}
            maxLength={MaxLength}
            placeholder={PlaceHolder}
            className={cx({ [styles.disabled]: Disabled }, [styles.input_style], [styles.LTR])}
            style={{ ...InputBackGroundColorStyle, ...TextCenterSize }}
          />
          {ShowControlButton ? (
            <div className={styles.inside_div_button}>
              <button className={cx({ [styles.disabled]: Disabled }, [styles.plus_input_button])} type="button" onClick={addValue}>^</button>
              <button className={cx({ [styles.disabled]: Disabled }, [styles.minus_input_button])} type="button" onClick={decreaseValue}>^</button>

            </div>
          ) : null }
        </div>
      </label>
    </div>
  );
}

NumberInputComponent.propTypes = {
  LabelText: PropTypes.string.isRequired,
  Step: PropTypes.number,
  Disabled: PropTypes.bool,
  LabelColor: PropTypes.string,
  InputBackGroundColor: PropTypes.string,
  IsRTL: PropTypes.bool,
  IsWithComma: PropTypes.bool,
  InputWidthSize: PropTypes.string,
  IsTextCenter: PropTypes.bool,
  ShowControlButton: PropTypes.bool,
  MinLength: PropTypes.number,
  MaxLength: PropTypes.number,
  PlaceHolder: PropTypes.string,
  IsDouble: PropTypes.bool,
  DecimalDotPlace: PropTypes.number,

};

NumberInputComponent.defaultProps = {
  Step: null,
  Disabled: false,
  LabelColor: '',
  InputBackGroundColor: '',
  IsRTL: false,
  IsWithComma: true,
  InputWidthSize: '',
  IsTextCenter: false,
  ShowControlButton: true,
  MinLength: null,
  MaxLength: null,
  PlaceHolder: 'Place Holder',
  IsDouble: false,
  DecimalDotPlace: null,
};

export default NumberInputComponent;
