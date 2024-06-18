/* eslint-disable */
import React, {
  useCallback,
  useEffect,
  // useRef,
  useState
} from 'react';
import styles from './Input.module.scss';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { CustomError } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as errorActions from '../../features/error'

type Props = {
  name: CustomError['errorName'],
  type: string,
  // error?: boolean,
  onChange: (cridential: string, name: string) => void,
};

const Input: React.FC<Props> = ({ name, type, onChange }) => {
  const [localValue, setLocalValue] = useState<string>('');
  // const inputRef = useRef(null);
  const dispatch: any = useAppDispatch();

  const errorName = name === 'email' ? 'emailError' : 'passwordError'; 
  let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const showWarning = useAppSelector(state => state.error[errorName]);
  // const localEror = useAppSelector(state => state.error)
  // console.log(localEror, showWarning, errorName, name, 'errr');
  
  useEffect(() => {
    if (name === 'email' && localValue.match(regexp)) {
      dispatch(errorActions.setEmailError(false));
    }
    else if (name === 'password' && localValue.length > 6) {
      // console.log(name, localValue, 'trololo222');      
      dispatch(errorActions.setPasswordError(false));
    }
  }, [localValue])
  
  const creidentialDelay = useCallback(
    debounce((data: string) => {
      onChange(data, name);
    }, 1000),
    []
  )

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLocalValue(event.currentTarget.value);
    
    creidentialDelay(event.currentTarget.value);
  }


  return (
    <div
      className={classNames(`${styles.inpt} mainText`, {
        [styles.border]: showWarning,
      })}
    >
      <input
        // ref={inputRef}
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