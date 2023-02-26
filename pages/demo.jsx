import React from 'react';
import ButtonComponents from '../components/button/ButtonComponent ';

export default function Demo() {
  return (
    <div>
      <ButtonComponents
        ButtonLabel="Button"
        IsDisabled
        IsRound={false}
      />
      <ButtonComponents
        ButtonLabel="Dark Button"
        ButtonTheme="dark"
        IsRound={false}
      />
    </div>
  );
}
