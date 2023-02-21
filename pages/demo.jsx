import React from 'react';
import ButtonComponents from '../components/button/Button';

export default function Demo() {
  const alertOnClick = () => {
    alert('Working>');
  };
  return (
    <div>
      <ButtonComponents
        ButtonLabel="Button"
        ButtonTheme="round"
        Onclick={alertOnClick}
      />
    </div>
  );
}
