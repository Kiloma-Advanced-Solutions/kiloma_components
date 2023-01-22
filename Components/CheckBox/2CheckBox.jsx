/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import style from './2CheckBox.module.css';

function CheckBox({
  CheckBoxTitle,
  IdForTheLabel,
  LabelValue,
  IsRequired,
  LabelFontSize,
  CheckBoxHeight,
  CheckBoxWidth,
  CheckBoxBackGroundColor,
  labelColor,
  LabelFontFamily,
  IsDisabled,
  ShouldDispalyLabel,
  RTL,
  IsMaxWidth,
  Checked,
  OnChange,
}) {
  const [isChecked, setIsChecked] = useState(Checked);

  const handleChecked = () => {
    setIsChecked((prev) => {
      OnChange(!prev);
      return !prev;
    });
  };

  useEffect(() => {
    setIsChecked(Checked);
  }, [Checked]);

  const makeInputStyleFromProps = () => ({
    cursor: 'pointer',
    height: `${CheckBoxHeight}px`,
    width: `${CheckBoxWidth}px`,
    accentColor: `${CheckBoxBackGroundColor}`,
  });
  const makeLabelStyleFromProps = () => ({
    fontSize: `${LabelFontSize}px`,
    color: `${labelColor}`,
    fontFamily: `${LabelFontFamily}`,
  });
  const makeLabelStyleFromPropsRequired = () => ({
    fontSize: `${LabelFontSize}px`,
    color: 'red',
    fontFamily: `${LabelFontFamily}`,
  });

  return (
    <div className={IsMaxWidth ? style.fullWidth : style.main}>
      <div
        className={RTL ? style.checkBoxContainerRTL : style.checkBoxContainer}
      >
        <input
          style={makeInputStyleFromProps()}
          // eslint-disable-next-line jsx-quotes
          type='checkbox'
          id={IdForTheLabel}
          value={LabelValue}
          required={IsRequired}
          disabled={IsDisabled}
          checked={isChecked}
          onChange={handleChecked}
        />
        {ShouldDispalyLabel && !IsRequired ? (
          <label style={makeLabelStyleFromProps()} htmlFor={IdForTheLabel}>
            {CheckBoxTitle}
          </label>
        ) : (
          <p />
        )}
        {ShouldDispalyLabel && IsRequired ? (
          <label
            style={makeLabelStyleFromPropsRequired()}
            htmlFor={IdForTheLabel}
          >
            {CheckBoxTitle}
          </label>
        ) : (
          <p />
        )}
      </div>
    </div>
  );
}

// adding prop type
CheckBox.propTypes = {
  CheckBoxTitle: PropTypes.string,
  IdForTheLabel: PropTypes.string,
  LabelValue: PropTypes.string,
  IsRequired: PropTypes.bool,
  ShouldDispalyLabel: PropTypes.bool,
  LabelFontSize: PropTypes.string,
  CheckBoxHeight: PropTypes.string,
  CheckBoxWidth: PropTypes.string,
  CheckBoxBackGroundColor: PropTypes.string,
  labelColor: PropTypes.string,
  LabelFontFamily: PropTypes.string,
  IsDisabled: PropTypes.bool,
  RTL: PropTypes.bool,
  IsMaxWidth: PropTypes.bool,
  Checked: PropTypes.bool,
  OnChange: PropTypes.func,
};

CheckBox.defualtProps = {
  CheckBoxTitle: '',
  IdForTheLabel: '',
  LabelValue: '',
  IsRequired: true,
  IsReadOnly: false,
  ShouldDispalyLabel: false,
  LabelFontSize: '',
  CheckBoxHeight: '',
  CheckBoxWidth: '',
  CheckBoxBackGroundColor: '',
  labelColor: '',
  LabelFontFamily: '',
  IsDisabled: false,
  RTL: false,
  IsMaxWidth: false,
  Checked: false,
};
export default CheckBox;
