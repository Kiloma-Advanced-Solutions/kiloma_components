import React from 'react';
import CheckBox from './CheckBox';

export default {
  title: 'myStories/CheckBox',
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
  CheckBoxTitle: '',
  IdForTheLabel: '',
  LabelValue: '',
  IsChecked: '',
  IsRequired: false,
  ShouldDispalyLabel: true,
  LabelFontSize: '',
  CheckBoxHeight: '',
  CheckBoxWidth: '',
  CheckBoxBackGroundColor: '',
  LabelColor: '',
  LabelFontFamily: '',
  IsDisabled: false,
  RTL: false,
  IsMaxWidth: false,
};
