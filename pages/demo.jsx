import React from 'react';
import ButtonComponents from '../components/button/ButtonComponent ';
import CheckBox from '../components/Checkbox2/Checkbox2';

export default function Demo() {
  return (
    <div>
      <ButtonComponents
        ButtonLabel="Button"
        ButtonTheme="dark"
        IsRound={false}
        IsShaded
      />

      <CheckBox
        CheckBoxTitle="Hello"
        IsChecked=""
        IsRequired={false}
        LabelColor=""
        ShouldDisplayLabel
      />
    </div>
  );
}
