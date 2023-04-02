import React from 'react';
import Textarea from './TextAreaComponent';

export default {
  title: 'Components/Input Components/Textarea',
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <Textarea {...args} />;
}

export const PrimaryComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryComponent.args = {
  Label: 'Text Area Label',
  LabelPlace: '',
  Id: '',
  Name: '',
  Row: 20,
  Column: 40,
  AutoComplete: true,
  IsDisabled: false,
  IsRequired: false,
  IsReadOnly: false,
  MinValue: 1,
  MaxValue: 999,
  IsSpellChecker: true,
  DefaultValue: null,
  IsRTL: false,
  isShaded: false,
  ShadowColor: '',

};
