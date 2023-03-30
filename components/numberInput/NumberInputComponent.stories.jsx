import React from 'react';
import NumberInputComponent from './NumberInputComponent';

export default {
  title: 'Components/Input Components/NumberInput',
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
  LabelText: 'Example',
  Step: 1,
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
