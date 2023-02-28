import React from 'react';
import styles from '../styles/components.module.css';
import ButtonComponents from '../components/button/ButtonComponent ';
import CheckBox from '../components/Checkbox2/Checkbox2';

export default function components() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Components</h1>
      <div className={styles.input_div}>
        <h2 className={styles.H2}>Input Components </h2>
        <div className={styles.components_examples}>
          <ol className={styles.ol1}>
            <li>
              <div className={styles.components_examples}>
                <p className={styles.p1}> CheckBox- </p>
                <CheckBox
                  CheckBoxHeight="15"
                  CheckBoxTitle="Agree ✅"
                  CheckBoxWidth="15"
                  IdForTheLabel="checkbox"
                  IsChecked=""
                  IsRequired={false}
                  ShouldDisplayLabel
                  labelColor="#1f7dda"
                />
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.ui_div}>
        <h2 className={styles.H2}>UI Components</h2>
        <div className={styles.components_examples}>
          <ol className={styles.ol1}>
            <li>
              <div className={styles.components_examples}>
                <p className={styles.p1}> Button- </p>
                <ButtonComponents
                  ButtonLabel="Click Here"
                  IsRound={false}
                />
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
