import React from 'react';
import styles from '../styles/components.module.css';
import ButtonComponents from '../components/button/ButtonComponent ';
import CheckBox from '../components/Checkbox2/Checkbox2';

export default function components() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Components</h1>
      </div>
      <div className={styles.input_div}>
        <h2 className={styles.h2}>Input Components</h2>
        <div className={styles.examples}>
          <p>1.CheckBox Component - </p>
          <CheckBox
            CheckBoxBackGroundColor="#24b655"
            CheckBoxHeight="15"
            CheckBoxTitle="Hello"
            CheckBoxWidth="15"
            IdForTheLabel="1"
            IsChecked=""
            IsRequired={false}
            LabelValue="1"
            ShouldDisplayLabel
            labelColor="#d20808"
          />

        </div>
      </div>
      <div className={styles.ui_div}>
        <h2 className={styles.h2}>UI Components</h2>
        <div className={styles.examples}>
          <p>1.Button Component - </p>
          <ButtonComponents
            ButtonLabel="Click Here"
            IsRound={false}
          />
        </div>
      </div>
    </div>
  );
}
