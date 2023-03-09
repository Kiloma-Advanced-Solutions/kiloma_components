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
      <NumberInputComponent
        InputWidthSize={55}
        LabelText="Money Amount "
        MaxLength={9999}
        MinLength={1}
        Step={0}
      />
    </div>
  );
}
