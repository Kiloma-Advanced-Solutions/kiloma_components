import React from 'react';
// import ButtonComponents from '../components/button/ButtonComponent ';
// import CheckBox from '../components/Checkbox2/Checkbox2';
// import NumberInputComponent from '../components/numberInput/NumberInputComponent';

export default function Demo() {
  return (
    <div>
      <label htmlFor="postTextAreaId">
        {' '}
        Testing
        <textarea
          id="postTextAreaId"
          name="story"
          rows="30"
          cols="90"
          autoComplete="true"
        // disabled
          placeholder="Hello"
          required
        // readOnly
          minLength={0}
          maxLength={999}
          spellCheck="false"
          wrap="hard"
          defaultValue="Hello"
        />
      </label>
    </div>
  );
}
