import React, {createContext, useContext, useEffect, useState} from 'react';
import {AuthContextType, UserType} from '../types/User';
import {useAuthAsyncStorage} from '../hooks/useAuthAsyncStorage';
import {ChildrenComponentProps} from '../types/Component';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<ChildrenComponentProps> = ({children}) => {
  const {authData, login, logout} = useAuthAsyncStorage();
  return (
    <AuthContext.Provider value={{authData, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
