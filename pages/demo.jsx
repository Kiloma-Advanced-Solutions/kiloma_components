import React from 'react';
import ButtonComponents from '../components/button/ButtonComponent ';

export default function Demo() {
  return (
    <div>

      <ButtonComponents
        ButtonLabel=""
        ButtonTheme="dark"
        IsRound={false}
        PathForImage="Images\logo.svg"
      />

    </div>
  );
}
