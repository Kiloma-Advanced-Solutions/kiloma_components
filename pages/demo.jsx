import React from 'react';
import Textarea from '../components/TextArea/TextAreaComponent';

export default function Demo() {
  return (
    <div>

      <Textarea
        AutoComplete
        Column={40}
        Id=""
        Label="English Example"
        LabelColor="blue"
        LabelFontFamily="Helvetica, Arial sans-serif"
        LabelPlace="Left"
        Name=""
        PlaceHolder="Enter Your text here..."
        Row={20}
        ShadowColor=""
        TextFontFamily="Helvetica, Arial sans-serif"
      />
    </div>
  );
}
