import AsyncStorage from '@react-native-async-storage/async-storage';
import {isIos} from '@utils/helper';

const Storage = {
  setItem: async (key: string, data: any) => {
    data = typeof data === 'string' ? data : JSON.stringify(data);
    try {
      await AsyncStorage.setItem(key, data);
    } catch (e) {
      console.error(e);
    }
  },

  getItem: async (key: string) => {
    try {
      let value = await AsyncStorage.getItem(key);
      try {
        return value ? JSON.parse(value) : null;
      } catch (e) {
        return value;
      }
    } catch (e) {
      console.error(e);
    }
  },

  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  },

  clear: async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      if (keys.length) {
        if (isIos) {
          await AsyncStorage.multiRemove(keys);
        } else {
          await AsyncStorage.clear();
        }
      }
    } catch (e) {
      console.error(e);
    }
  },
};

export default Storage;
