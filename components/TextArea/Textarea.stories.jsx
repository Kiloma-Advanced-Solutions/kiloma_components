import React from 'react';
import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <Textarea {...args} />;
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  Id: '',
  Name: '',
  Row: 20,
  Column: 40,
  AutoComplete: true,
  IsDisabled: false,
  PlaceHolder: 'place holder',
  IsRequired: false,
  IsReadOnly: false,
  MinValue: 1,
  MaxValue: 999,
  IsSpellChecker: true,
  DefaultValue: null,
  IsRTL: false,
};
