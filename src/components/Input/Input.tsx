/* eslint-disable */
import React, { useCallback, useState } from 'react';
import styles from './Input.module.scss';
import debounce from 'lodash.debounce';

type Props = {
  name: string,
  type: string,
  error?: boolean,
  onChange: (cridential: string, name: string) => void,
};

const Input: React.FC<Props> = ({ name, type, error, onChange }) => {
  const [localValue, setLocalValue] = useState('');

  const creidentialDelay = useCallback(
    debounce((data: string) => {
      onChange(data, name);
      console.log(localValue, 'localvalue');      
    }, 2000),
    []
  )

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLocalValue(event.currentTarget.value);
    // onChange(event.currentTarget.value, name);
  
    creidentialDelay(event.currentTarget.value);
  }

  if (error) {
    console.log('errorrrrrr input element'); 
  }



  return (
    <div className={`${styles.inpt} mainText`}>
      <input
        value={localValue}
        placeholder={name} 
        className={`${styles.inputField} mainText`} 
        type={type}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

export default Input;