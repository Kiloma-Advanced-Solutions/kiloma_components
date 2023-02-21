import React from 'react';
import styles from '../styles/components.module.css';
import CheckBox from '../components/Checkbox2/Checkbox2';
import ButtonComponents from '../components/button/Button';

export default function components() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Components</h1>
      </div>
      <div className={styles.input_title}>
        <p> Input Components </p>
      </div>
      <div className={styles.input_components}>
        <div className={styles.examples}>
          <ol>
            <li>
              <div className={styles.examples}>
                <p> Checkbox - </p>
                <CheckBox
                  CheckBoxTitle="Agree"
                  IsChecked=""
                  IsRequired={false}
                  ShouldDisplayLabel
                  labelColor="#19d443"
                  OnChange={() => {}}
                  CheckBoxWidth="25"
                  CheckBoxHeight="15"
                  LabelFontSize="20"
                />
              </div>
            </li>
            <li>
              <div className={styles.examples}>
                <p> Checkbox - </p>
                <ButtonComponents
                  ButtonLabel="Button"
                  ButtonTheme="dark"
                />
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
