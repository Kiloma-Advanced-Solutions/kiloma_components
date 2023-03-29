import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Textarea.module.css';

function Textarea({
  Id,
  Name,
  Row,
  Column,
  AutoComplete,
  IsDisabled,
  PlaceHolder,
  IsRequired,
  IsReadOnly,
  MinValue,
  MaxValue,
  IsSpellChecker,
  DefaultValue,
  IsRTL,
  LabelColor,
  TextColor,

}) {
  const LabelColorStyle = LabelColor ? { color: LabelColor } : {};
  const insideTextColor = TextColor ?{color: TextColor} : {};
  return (
    <div className={cx(styles.container, { [styles.RTL]: IsRTL })}>
      <label htmlFor="TextAreaId" className={styles.label} style={{ ...LabelColorStyle }}>
        Enter Your Text Here
        <textarea
          className={styles.text_area}
          id={Id}
          name={Name}
          rows={Row}
          cols={Column}
          autoComplete={AutoComplete}
          disabled={IsDisabled}
          placeholder={PlaceHolder}
          required={IsRequired}
          readOnly={IsReadOnly}
          minLength={MinValue}
          maxLength={MaxValue}
          spellCheck={IsSpellChecker}
          defaultValue={DefaultValue}
          style={{ ...insideTextColor }}
        />
      </label>

    </div>
  );
}

Textarea.propTypes = {
  Id: PropTypes.string,
  Name: PropTypes.string,
  Row: PropTypes.number,
  Column: PropTypes.number,
  AutoComplete: PropTypes.bool,
  IsDisabled: PropTypes.bool,
  PlaceHolder: PropTypes.string,
  IsRequired: PropTypes.bool,
  IsReadOnly: PropTypes.bool,
  MinValue: PropTypes.number,
  MaxValue: PropTypes.number,
  IsSpellChecker: PropTypes.bool,
  DefaultValue: PropTypes.string,
  IsRTL: PropTypes.bool,
  LabelColor: PropTypes.string,
  TextColor: PropTypes.string,
};

Textarea.defaultProps = {
  Id: '',
  Name: '',
  Row: 20,
  Column: 40,
  AutoComplete: true,
  IsDisabled: false,
  PlaceHolder: 'place holder',
  IsRequired: false,
  IsReadOnly: false,
  MinValue: 1,
  MaxValue: 999,
  IsSpellChecker: true,
  DefaultValue: null,
  IsRTL: false,
  LabelColor: '',
  TextColor: '',
};
export default Textarea;
