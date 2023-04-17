import React from 'react';
import styles from '../styles/components.module.css';
import ButtonComponents from '../components/button/ButtonComponent ';
import CheckBox from '../components/Checkbox2/Checkbox2';
import NumberInputComponent from '../components/numberInput/NumberInputComponent';
import Textarea from '../components/TextArea/TextAreaComponent';

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
                <Textarea
                  AutoComplete
                  Column={40}
                  Id=""
                  Label="Text Area Example"
                  LabelColor="rgba(5, 4, 5, 1)"
                  LabelFontFamily="Helvetica, Arial sans-serif"
                  LabelPlace="row"
                  Name=""
                  PlaceHolder="Enter Your Text"
                  Row={3}
                  ShadowColor=""
                  TextFontFamily="Helvetica, Arial sans-serif"
                />
              </div>
            </li>
            <li>
              <div className={styles.components_examples}>
                <p className={styles.p1}> CheckBox </p>

                <CheckBox
                  CheckBoxHeight="25"
                  CheckBoxTitle="Agree "
                  CheckBoxWidth="20"
                  IdForTheLabel="checkbox"
                  IsChecked=""
                  IsRequired={false}
                  LabelFontFamily="Helvetica"
                  ShouldDisplayLabel
                  labelColor="#1f7dda"
                />
              </div>
            </li>
            <li>
              <div className={styles.components_examples}>
                <NumberInputComponent
                  InputWidthSize="25%"
                  IsDouble
                  IsWithComma={false}
                  LabelText="Number Input Example"
                  MaxLength={999}
                  MinLength={1}
                  Step={1}
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
                <p className={styles.p1}> Button </p>

                <ButtonComponents
                  ButtonLabel="Click Here "
                  ButtonTheme="dark"
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
