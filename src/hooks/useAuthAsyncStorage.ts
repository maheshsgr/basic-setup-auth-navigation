import {useEffect, useState} from 'react';
import {setData, getData, removeData} from '../utils/AsyncStorage';
import StorageKeys from '../constants/StorageKeys';
import {UserType} from '../types/User';

export const useAuthAsyncStorage = () => {
  const [authData, setAuthData] = useState<UserType | null>();

  useEffect(() => {
    // Load authentication data from AsyncStorage when the component mounts
    loadAuthData();
  }, []);

  const loadAuthData = async () => {
    const storedAuthData = await getData(StorageKeys.AuthData);
    if (storedAuthData) {
      setAuthData(JSON.parse(storedAuthData));
    }
  };

  const login = async (authData: UserType) => {
    await setData(StorageKeys.AuthData, JSON.stringify(authData));
    setAuthData(authData);
  };

  const logout = async () => {
    await removeData(StorageKeys.AuthData);
    setAuthData(null);
  };
  return {authData, login, logout};
};
