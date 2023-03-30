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
}) {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    if (IsDouble) {
      const regex = /^-?\d*\.?\d*$/;
      let input = e.target.value.replace(',', '');
      if (regex.test(input)) {
        // let [integerPart, decimalPart] = input.split('.');
        const divided = input.split('.');
        let integerPart = divided[0];
        const decimalPart = divided[1];
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (decimalPart !== undefined) {
          input = `${integerPart}.${decimalPart}`;
        } else {
          input = integerPart;
        }

        setValue(input);
      }
    } else {
      const regexWithOutComma = /^-?\d*$/;
      const firstInput = e.target.value.replace(',', '');
      if (regexWithOutComma.test(firstInput)) {
        setValue(firstInput.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      }
    }
  };

  const handleWithOutComma = (e) => {
    if (IsDouble) {
      const regex = /^-?\d*\.?\d*$/;
      const input = e.target.value;
      if (regex.test(input)) {
        setValue(input);
      }
    } else {
      const regexWithOutComma = /^-?\d*$/;
      const firstInput = e.target.value;
      if (regexWithOutComma.test(firstInput)) {
        setValue(firstInput);
      }
    }
  };

  const addValue = (decimalSeparator = ',') => {
    if (Step) {
      setValue((prevValue) => {
        let newValue;
        if (!IsWithComma) {
          newValue = Number(prevValue) + Step;
        } else {
          let cleanValue = `${prevValue}`.replace(/[^\d.-]/g, '');
          if (decimalSeparator === '.') {
            cleanValue = cleanValue.replace(',', '.');
          }
          newValue = Number(cleanValue) + Step;
          if (decimalSeparator === ',') {
            newValue = newValue.toLocaleString('en-US', { minimumFractionDigits: 2 });
          } else {
            newValue = newValue.toLocaleString('en-US', { minimumFractionDigits: 2 });
          }
        }
        return newValue;
      });
    } else {
      setValue((prevValue) => Number(prevValue + 1));
    }
  };

  const decreaseValue = (decimalSeparator = ',') => {
    if (Step) {
      setValue((prevValue) => {
        let newValue;
        if (!IsWithComma) {
          newValue = Number(prevValue) - Step;
        } else {
          let cleanValue = `${prevValue}`.replace(/[^\d.-]/g, '');
          if (decimalSeparator === '.') {
            cleanValue = cleanValue.replace(',', '.');
          }
          newValue = Number(cleanValue) - Step;
          if (decimalSeparator === ',') {
            newValue = newValue.toLocaleString('en-US', { minimumFractionDigits: 2 });
          } else {
            newValue = newValue.toLocaleString('en-US', { minimumFractionDigits: 2 });
          }
        }
        return newValue;
      });
    } else {
      setValue((prevValue) => Number(prevValue - 1));
    }
  };

  function handleOnKey(event) {
    const currentPosition = event.target.selectionStart;

    if (event.keyCode === 40) {
      decreaseValue();
      // setInputValue1(event.target.value);

      setTimeout(() => {
        event.target.setSelectionRange(currentPosition, currentPosition);
      });
    } else if (event.keyCode === 38) {
      addValue();
      // setInputValue1(event.target.value);

      setTimeout(() => {
        event.target.setSelectionRange(currentPosition, currentPosition);
      });
      event.preventDefault();
    }
  }

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
            onInput={IsWithComma ? handleChange : handleWithOutComma}
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
              <div className={cx({ [styles.disabled]: Disabled }, [styles.plus_input_button])} role="button" onClick={addValue} tabIndex={0} onKeyUp={() => {}}>^</div>
              <div className={cx({ [styles.disabled]: Disabled }, [styles.minus_input_button])} role="button" type="button" onClick={decreaseValue} tabIndex={0} onKeyUp={() => {}}>^</div>

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

};

export default NumberInputComponent;
