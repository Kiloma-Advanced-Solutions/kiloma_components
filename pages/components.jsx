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
        <h2 className={styles.H2}>Input Components</h2>
        <div className={styles.components_examples}>
          <ol className={styles.ol1}>
            <li>
              <div className={styles.components_examples}>
                <p className={styles.p1}> CheckBox- </p>
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
                <p className={styles.p1}> CheckBox- </p>
                <ButtonComponents
                  ButtonLabel="Click Here"
                  IsRound={false}
                />
              </div>
            </li>
            <li>
              <div className={styles.components_examples}>
                <p className={styles.p1}> CheckBox- </p>
                <ButtonComponents
                  ButtonLabel="Button"
                  IsRound={false}
                  IsShaded
                  ShadowColor="#d71c1c"
                  backgroundColor="#000000"
                />
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
