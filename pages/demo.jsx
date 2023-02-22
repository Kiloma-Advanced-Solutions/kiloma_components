import React from 'react';
import { FaAccusoft } from 'react-icons/fa';
import ButtonComponents from '../components/button/ButtonComponent ';

export default function Demo() {
  return (
    <div>

      <ButtonComponents
        ButtonLabel=  <FaAccusoft  size={30}/>
        ButtonTheme="light"
      />
    </div>
  );
}
