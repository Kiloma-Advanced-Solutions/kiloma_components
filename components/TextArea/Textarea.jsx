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

}) {
  const LabelColorStyle = LabelColor ? { color: LabelColor } : {};
  const insideTextColor = TextColor ? { color: TextColor } : {};

  return (
    <div className={cx(styles.container, { [styles.RTL]: IsRTL })}>
      <textarea
        className={cx(styles.input, { [styles.disabled]: IsDisabled })}
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
        defaultValue={DefaultValue}
        style={{ ...insideTextColor }}
      />
      <label htmlFor="TextAreaId" className={cx(styles.label)} style={{ ...LabelColorStyle }}>
        {' '}
        {Label}
        {' '}
      </label>

    </div>
  );
}

Textarea.propTypes = {
  Label: PropTypes.string,
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
};

Textarea.defaultProps = {
  Label: '',
  Id: '',
  Name: '',
  Row: 20,
  Column: 40,
  AutoComplete: true,
  IsDisabled: false,
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
