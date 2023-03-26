import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './Checkbox2.module.css';

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
  ShouldDisplayLabel,
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
    cursor: 'grab',
    height: `${CheckBoxHeight}px`,
    width: `${CheckBoxWidth}px`,
    accentColor: `${CheckBoxBackGroundColor}`,
  });
  const makeLabelStyleFromProps = () => ({
    fontSize: `${LabelFontSize}px`,
    color: `${labelColor}`,
    fontFamily: `${LabelFontFamily}`,
    cursor: 'grab',
  });
  const makeLabelStyleFromPropsRequired = () => ({
    fontSize: `${LabelFontSize}px`,
    color: 'red',
    fontFamily: `${LabelFontFamily}`,
    cursor: 'grab',
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
        {ShouldDisplayLabel && !IsRequired ? (
          <label style={makeLabelStyleFromProps()} htmlFor={IdForTheLabel}>
            <div>
              {CheckBoxTitle}
            </div>
          </label>
        ) : (
          <p />
        )}
        {ShouldDisplayLabel && IsRequired ? (
          <label
            style={makeLabelStyleFromPropsRequired()}
            htmlFor={IdForTheLabel}
          >
            <div>
              {CheckBoxTitle}
            </div>
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
  ShouldDisplayLabel: PropTypes.bool,
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

CheckBox.defaultProps = {
  CheckBoxTitle: '',
  IdForTheLabel: '',
  LabelValue: '',
  IsRequired: true,
  ShouldDisplayLabel: false,
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
  OnChange: () => {},
};
export default CheckBox;
