import React from 'react';
import styles from '../styles/Demo_page.module.css';
import CheckBox from '../components/Checkbox2/Checkbox2';

export default function demoPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Components</h1>
      </div>
      <div className={styles.sub_div}>
        <div className={styles.sub_title}>
          <p> Input Components </p>
        </div>
        <div className={styles.sbExample}>
          <CheckBox
            CheckBoxBackGroundColor=""
            CheckBoxHeight=""
            CheckBoxTitle="CheckBox"
            CheckBoxWidth=""
            IdForTheLabel=""
            IsChecked=""
            LabelColor=""
            LabelFontFamily=""
            LabelFontSize=""
            LabelValue=""
            ShouldDispalyLabel
          />
        </div>
      </div>
    </div>
  );
}
