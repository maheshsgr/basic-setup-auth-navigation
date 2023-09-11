import AsyncStorage from '@react-native-async-storage/async-storage';
import StorageKeys from '../constants/StorageKeys';

// Function to set data in AsyncStorage
export const setData = async (
  key: StorageKeys,
  value: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error setting data for key ${key}:`, error);
  }
};

// Function to get data from AsyncStorage
export const getData = async (key: StorageKeys): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error(`Error getting data for key ${key}:`, error);
    return null;
  }
};

// Function to remove data from AsyncStorage
export const removeData = async (key: StorageKeys): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing data for key ${key}:`, error);
  }
};
