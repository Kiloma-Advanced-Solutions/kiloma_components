import React from 'react';
import NumberInputComponent from './NumberInputComponent';

export default {
  title: 'Components/NumberInput',
  component: NumberInputComponent,
  parameters: {
    docs: {
      description: {
        component: 'Number Component',
      },
    },
  },
};

function Template(args) {
  return <NumberInputComponent {...args} />;
}

export const Number = Template.bind({});

Number.args = {
  LabelText: 'Amount',
  Step: 0,
  Disabled: false,
  IsRTL: false,
  IsWithComma: true,
  InputWidthSize: 35,
  IsTextCenter: false,
  ShowControlButton: true,
  MinLength: 1,
  MaxLength: 999,
  IsDouble: false,

};
