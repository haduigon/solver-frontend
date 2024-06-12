import React from 'react';
import styles from './Input.module.scss';

type Props = {
  name: string,
  type: string,
};

const Input: React.FC<Props> = ({ name, type }) => {
  return (
    <div className={`${styles.inpt} mainText`}>
      {/* {name} */}
      <input 
        placeholder={name} 
        className={`${styles.inputField} mainText`} 
        type={type}
      />
    </div>
  );
};

export default Input;