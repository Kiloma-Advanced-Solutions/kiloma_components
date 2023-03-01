import React from 'react';
import ButtonComponents from '../components/button/ButtonComponent ';
import CheckBox from '../components/Checkbox2/Checkbox2';
import NumberInputComponent from '../components/numberInput/NumberInputComponent';

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

      <NumberInputComponent LabelText="How Much Tip" PlaceHolderText="Number" />
    </div>
  );
}
