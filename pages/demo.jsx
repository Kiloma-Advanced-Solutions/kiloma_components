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
        InputBackGroundColor="#ffffff"
        InputWidthSize={10}
        LabelColor="#3194a5"
        LabelText="Text for Label "
      />
    </div>
  );
}
