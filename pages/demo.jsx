import React from 'react';
import Textarea from '../components/TextArea/TextAreaComponent';

export default function Demo() {
  return (
    <div>
      <Textarea
        AutoComplete={false}
        Column={50}
        Id="1"
        IsRequired
        Label="sdfsdf"
        Name="1"
      />
    </div>
  );
}
