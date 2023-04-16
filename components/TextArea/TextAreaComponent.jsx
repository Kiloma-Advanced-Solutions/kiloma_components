import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './TextAreaComponent.module.css';

const flexDirectionMap = {
  Up: 'column',
  Left: 'row',
  Bottom: 'column-reverse',
  Right: 'row-reverse',

};

function Textarea({
  Id,
  Name,
  Row,
  PlaceHolder,
  Column,
  AutoComplete,
  IsDisabled,
  IsRequired,
  IsReadOnly,
  MinValue,
  MaxValue,
  IsSpellChecker,
  DefaultValue,
  IsRTL,
  LabelColor,
  TextColor,
  Label,
  LabelFontFamily,
  TextFontFamily,
  IsShaded,
  ShadowColor,
  LabelPlace,
  BorderColor,
  IsExpandAllow,
  IsWithBorder,
  BorderWidth,

}) {
  const LabelColorStyle = LabelColor ? { color: LabelColor } : {};
  const insideTextColor = TextColor ? { color: TextColor } : {};
  const LabelFontFamilyProp = LabelFontFamily ? { fontFamily: LabelFontFamily } : { fontFamily: 'Helvetica,Arial, sans-serif' };
  const TextInsideFontFamilyProp = TextFontFamily ? { fontFamily: TextFontFamily } : { fontFamily: 'Helvetica,Arial, sans-serif' };
  const shadowColorStyles = ShadowColor && IsShaded ? { boxShadow: `0px 0px 5px ${ShadowColor}` } : {};
  const flexDirectionStyle = LabelPlace ? { flexDirection: flexDirectionMap[LabelPlace] } : { flexDirection: 'column' };
  const isExpandProp = IsExpandAllow ? {} : { resize: 'none' };
  const borderStyle = IsWithBorder ? { border: `${BorderColor || 'black'}  ${BorderWidth}px solid` } : { border: 'none' };
  const borderColorStyle = BorderColor ? { border: `${BorderColor} ${BorderWidth}px solid` } : { border: 'border: 1px solid #181616' };

  return (
    <div className={cx(styles.container, { [styles.RTL]: IsRTL })} style={flexDirectionStyle}>
      <label htmlFor="TextAreaId" className={cx(styles.label)} style={{ ...LabelColorStyle, ...LabelFontFamilyProp }}>
        {' '}
        {Label}
        {' '}
      </label>

      <p className={styles.placeholder}>
        {' '}
        {' '}
      </p>
      <textarea
        className={cx(styles.input, {
          [styles.disabled]: IsDisabled,
          [styles.RTL_Label]: IsShaded,
        })}
        style={{
          ...TextInsideFontFamilyProp,
          ...insideTextColor,
          ...shadowColorStyles,
          ...borderColorStyle,
          ...isExpandProp,
          ...borderStyle,
        }}
        id={Id}
        name={Name}
        rows={Row}
        cols={Column}
        autoComplete={AutoComplete}
        disabled={IsDisabled}
        required={IsRequired}
        readOnly={IsReadOnly}
        minLength={MinValue}
        maxLength={MaxValue}
        spellCheck={IsSpellChecker}
        value={DefaultValue}
        placeholder={PlaceHolder}
      />
    </div>
  );
}

Textarea.propTypes = {
  Label: PropTypes.string,
  LabelPlace: PropTypes.oneOf(['Up', 'Left', 'Bottom', 'Right']),
  PlaceHolder: PropTypes.string,
  Id: PropTypes.string,
  Name: PropTypes.string,
  Row: PropTypes.number,
  Column: PropTypes.number,
  AutoComplete: PropTypes.bool,
  IsDisabled: PropTypes.bool,
  IsRequired: PropTypes.bool.isRequired,
  IsReadOnly: PropTypes.bool,
  MinValue: PropTypes.number,
  MaxValue: PropTypes.number,
  IsSpellChecker: PropTypes.bool,
  DefaultValue: PropTypes.string,
  IsRTL: PropTypes.bool,
  LabelColor: PropTypes.string,
  TextColor: PropTypes.string,
  LabelFontFamily: PropTypes.string,
  TextFontFamily: PropTypes.string,
  IsShaded: PropTypes.bool,
  ShadowColor: PropTypes.string,
  BorderColor: PropTypes.string,
  IsExpandAllow: PropTypes.bool,
  IsWithBorder: PropTypes.bool,
  BorderWidth: PropTypes.string,
};

Textarea.defaultProps = {
  Label: 'Text For the label',
  LabelPlace: 'Label Place',
  PlaceHolder: '',
  Id: 'Label ID',
  Name: 'Label Name',
  Row: null,
  Column: null,
  AutoComplete: false,
  IsDisabled: false,
  IsReadOnly: false,
  MinValue: 1,
  MaxValue: 999,
  IsSpellChecker: true,
  DefaultValue: null,
  IsRTL: false,
  LabelColor: '',
  TextColor: '',
  LabelFontFamily: '',
  TextFontFamily: '',
  IsShaded: false,
  ShadowColor: 'Shadow Color',
  BorderColor: '',
  IsExpandAllow: true,
  IsWithBorder: true,
  BorderWidth: 1,
};
export default Textarea;
