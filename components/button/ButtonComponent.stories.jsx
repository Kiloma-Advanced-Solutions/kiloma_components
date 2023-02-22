import React from 'react';
import ButtonComponents from './ButtonComponent ';

export default {
  title: 'Components/Button',
  component: ButtonComponents,
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
  UrlIcon: '',
  RelativePathUrlImg: '',
  ImageAlt: '',
  RTL: false,

};
