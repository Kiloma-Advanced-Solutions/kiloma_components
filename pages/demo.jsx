import React from 'react';
import ButtonComponents from '../components/button/ButtonComponent ';
import CheckBox from '../components/Checkbox2/Checkbox2';
import NumberInputComponent from '../components/numberInput/NumberInputComponent';

export default function Demo() {
  const number = 1000000;

  const formattedNumber = number.toLocaleString('en-US');

  console.log(formattedNumber); // 1,234,567,890
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
        LabelText="Enter Amount Of Dollars "
        MaxLength={10}
        MinLength={0}
        Step={1}
      />
    </div>
  );
}
