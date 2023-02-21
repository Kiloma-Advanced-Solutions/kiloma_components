import React from 'react';
import ButtonComponents from '../components/button/Button';

export default function Demo() {
  const alertOnClick = () => {
    console.log('Working>');
  };
  return (
    <div>
      <ButtonComponents
        ButtonLabel="Button"
        ButtonTheme="round"
        Disabled
      />
    </div>
  );
}
