import React from 'react';
import ButtonComponents from './ButtonComponent ';

export default {
  title: 'Components/Button',
  component: ButtonComponents,
  parameters: {
    docs: {
      description: {
        component: 'Place for adding info or description about the component',
      },
    },
  },
};
// One Time
function Template(args) {
  return <ButtonComponents {...args} />;
}
export const Button = Template.bind({});

Button.args = {
  ButtonLabel: 'Button',
  ButtonTheme: 'round',
  IsDisabled: false,
  IsRound: true,
  PathForImage: '',
  ImageAlt: '',
  RTL: false,

};
