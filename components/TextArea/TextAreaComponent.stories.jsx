import React from 'react';
import Textarea from './TextAreaComponent';

export default {
  title: 'Components/Input Components/Textarea',
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return (
    <div style={{ marginTop: 100 }}>
      <Textarea {...args} />
    </div>
  );
}

export const EnglishExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EnglishExample.args = {
  Label: 'English Example',
  LabelPlace: 'row',
  Id: '',
  Name: '',
  Row: 3,
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
  ShadowColor: '',
  LabelFontFamily: 'Helvetica, Arial sans-serif',
  TextFontFamily: 'Helvetica, Arial sans-serif',
  LabelColor: 'blue',
  PlaceHolder: 'Enter Your text here...',
  IsExpandAllow: true,
  IsWithBorder: true,

};

export const HebrewExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HebrewExample.args = {
  Label: 'דוגמא בעברית',
  LabelPlace: 'row',
  Id: '',
  Name: '',
  Row: 3,
  Column: 40,
  AutoComplete: true,
  IsDisabled: false,
  IsRequired: false,
  IsReadOnly: false,
  MinValue: 1,
  MaxValue: 999,
  IsSpellChecker: true,
  DefaultValue: null,
  IsRTL: true,
  ShadowColor: '',
  LabelFontFamily: 'Helvetica, Arial sans-serif',
  TextFontFamily: 'Helvetica, Arial sans-serif',
  LabelColor: 'green',
  PlaceHolder: 'הכנס כאן את הטקסט..',
  IsExpandAllow: true,
  IsWithBorder: true,
  borderWidth: 1,

};
