import React from 'react';
import ButtonComponents from './Button';

export default {
  title: 'Components/Button',
  component: ButtonComponents,
};
// One Time
function Template(args) {
  return <ButtonComponents {...args} />;
}
export const Button = Template.bind({});
// export const Dark = Template.bind({});

Button.args = {
  buttonLabel: 'Button',
  ButtonTheme: 'light',
};
