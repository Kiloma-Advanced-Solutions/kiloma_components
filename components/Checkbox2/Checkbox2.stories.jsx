import React from 'react';
import CheckBox from './Checkbox2';

export default {
  title: 'Components/Input Components/Checkbox',
  component: CheckBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <CheckBox {...args} />;
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  CheckBoxLabel: '',
  CheckBoxId: '',
  LabelValue: '',
  IsChecked: '',
  IsRequired: false,
  ShouldDisplayLabel: true,
  LabelFontSize: '',
  CheckBoxHeight: '',
  CheckBoxWidth: '',
  CheckBoxBackGroundColor: '',
  LabelFontFamily: '',
  IsDisabled: false,
  RTL: false,
  IsMaxWidth: false,
};
