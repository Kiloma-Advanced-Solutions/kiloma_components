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

}) {
  return (
    <div className={cx(styles.container, { [styles.RTL]: IsRTL })}>
      <label htmlFor="TextAreaId">
        {' '}
        Testing
        <textarea
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
};
export default Textarea;
