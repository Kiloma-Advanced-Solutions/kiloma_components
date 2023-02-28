import React from 'react';
import styles from '../styles/components.module.css';
import ButtonComponents from '../components/button/ButtonComponent ';
import CheckBox from '../components/Checkbox2/Checkbox2';

export default function components() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Components</h1>
      <div className={styles.input_div}>
        <h2>Input Components</h2>
        <ol>
          <li>
            {' '}
            <CheckBox
              CheckBoxHeight="15"
              CheckBoxTitle="Agree  ✅"
              CheckBoxWidth="15"
              IdForTheLabel="id"
              IsChecked=""
              IsRequired={false}
              LabelColor="#88cb7e"
              ShouldDisplayLabel
            />
          </li>
        </ol>
      </div>
      <div className={styles.ui_div}>
        <h2>UI Components</h2>
        <ol>
          <li>
            <ButtonComponents
              ButtonLabel="Click Here"
              IsRound={false}
            />
          </li>
        </ol>
      </div>
    </div>
  );
}
