import AsyncStorage from '@react-native-async-storage/async-storage';

const getKey = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    return  '@'+ month + '-' + date.getFullYear();
}


const getData = async(key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value != null ? JSON.parse(value) : null;
    } catch(e){

    }
}

const storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
  }

export  async function loadRegistry () {
    return await getData(getKey());

    
}

export async function setRegistry () {
    let registry = {
        "Test": "TOST"
    };
    await storeData(getKey(),registry);
}
