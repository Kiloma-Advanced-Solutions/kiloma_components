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
  LabelText: 'Text for Label ',
  Step: 1,
  Disabled: false,
  IsRTL: false,
  IsWithComma: true,
  InputWidthSize: 25,
  IsTextCenter: false,
  ShowControlButton: true,
};
