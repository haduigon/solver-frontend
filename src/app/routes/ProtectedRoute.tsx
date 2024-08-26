/* eslint-disable */
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate } from "react-router-dom";
import Loader from "../../components/Loader";
import React from "react";
import { useAppSelector } from "../hooks";

type Props = {
  children: any,
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<any>(undefined);
  const { fbAuthToken } = useAppSelector(state => state.user);

  useEffect(() => {
    console.log('protected route')
      if (fbAuthToken.length > 0) {
      setUser({ accesToken: fbAuthToken });
    }
  }, [fbAuthToken.length])

  useEffect(() => {
    const listen = onAuthStateChanged(getAuth(), (localUser) => {
      // debugger
      if (!localUser && fbAuthToken.length === 0) {
        setUser(null);
      }
      if (localUser) {
        setUser(localUser);
      }
      // if (fbAuthToken.length > 0) {
      //   setUser({"fbAuthToken": fbAuthToken})
      // }

      return () => {
        listen();
      }
    });
  }, []);

  console.log(user , 'opopopopo');
  
  return (
    <div className="global-container">
      {user === undefined && <Loader />}
      {user === null && <Navigate to='/' />}
      {user && <>{children}</>}
    </div>
  )
}
export default ProtectedRoute;