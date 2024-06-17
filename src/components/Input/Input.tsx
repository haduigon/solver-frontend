/* eslint-disable */
import React, { useCallback, useRef, useState } from 'react';
import styles from './Input.module.scss';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { CustomError } from '../../types/types';
import { useAppSelector } from '../../app/hooks';

type Props = {
  name: string,
  type: string,
  // error?: boolean,
  onChange: (cridential: string, name: string) => void,
};

const Input: React.FC<Props> = ({ name, type, onChange }) => {
  const [localValue, setLocalValue] = useState<string>('');
  const inputRef = useRef(null);

  const touched = document.activeElement === inputRef.current;
  let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const localError: CustomError["errorName"] = useAppSelector(state => state.error.errorName);
  const inputHasError = localError === name;
  const showWarning = (touched && !localValue.match(regexp) && localValue.length > 0) || inputHasError;


  const creidentialDelay = useCallback(
    debounce((data: string) => {
      onChange(data, name);
    }, 2000),
    []
  )

  // console.log(localValue.match(regexp), showWarning, 'event.currentTarget.value.match(regexp)');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLocalValue(event.currentTarget.value);
  
    creidentialDelay(event.currentTarget.value);
  }

  // if (error) {
  //   console.log('errorrrrrr input element'); 
  // }

  return (
    <div
      className={classNames(`${styles.inpt} mainText`, {
        [styles.border]: showWarning,
      })}
    >
      <input
        ref={inputRef}
        value={localValue}
        placeholder={name} 
        className={classNames(`${styles.inputField} ${styles.inputField}`, {
          [styles.warning]: showWarning,
        })}
        type={type}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

export default Input;