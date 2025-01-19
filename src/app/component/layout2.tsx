"use client";

import {persistor, Store} from "../../redux/store";
import React from 'react';
import { Provider } from 'react-redux'; 
import { PersistGate } from "redux-persist/integration/react";
import Loader from "../loading";

const Layout2 = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={Store}>
      <PersistGate loading={<Loader/>} persistor={persistor}/>
     {children}
    </Provider>
  )
}

export default Layout2
