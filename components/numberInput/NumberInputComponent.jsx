import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NumberInputComponent({
  LabelText, PlaceHolderText, MinLength, MaxLength, Step, Size, Disabled,
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <label>
        {LabelText}
        <input type="number" value={value} placeholder={PlaceHolderText} onChange={handleChange} min={MinLength} max={MaxLength} step={Step} disabled={Disabled} size={Size} />
      </label>
    </div>
  );
}

NumberInputComponent.propTypes = {
  LabelText: PropTypes.string,
  PlaceHolderText: PropTypes.string,
  MinLength: PropTypes.number,
  MaxLength: PropTypes.number,
  Step: PropTypes.number,
  Size: PropTypes.string,
  Disabled: PropTypes.bool,
};
// Size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),

NumberInputComponent.defaultProps = {
  LabelText: '',
  PlaceHolderText: '',
  MinLength: null,
  MaxLength: null,
  Step: null,
  Size: '',
  Disabled: false,

};

export default NumberInputComponent;
