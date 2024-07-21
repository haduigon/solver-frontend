/* eslint-disable */
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navigate } from "react-router-dom";
import Loader from "../../components/Loader";
import React from "react";

type Props = {
  children: any,
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<any>(undefined);

  useEffect(() => {
    const listen = onAuthStateChanged(getAuth(), (localUser) => {
    // debugger
    if (!localUser) {
      setUser(null);
    }
    if (localUser) {
      setUser(localUser);
    }

    return () => {
      listen();
    }
  });
}, [])

  console.log(2 % 7 , 'opopopopo');
  
  return (
    <div className="global-container">
      {user === undefined && <Loader />}
      {user === null && <Navigate to='/' />}
      {user && <>{children}</>}
    </div>
  )
}
export default ProtectedRoute;