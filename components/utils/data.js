import AsyncStorage from '@react-native-async-storage/async-storage';

const MONTH = '@month:';

function getKey(date) {
    let month = date.getMonth() + 1;
    return  MONTH+ month + '-' + date.getFullYear();
}

function getDayKey(date){
    return date.getDate();
}


export async function getAllMonths(){
    let data_list = await AsyncStorage.getAllKeys();

    let months = [];

    data_list.forEach( (value) => {
        if(value.includes(MONTH)){
            let month = value.replace(MONTH,'');
            months.push(month);
        }
    })
    return months;
}

function getHour(date) {

    let hour = date.getHours();
    let min = date.getMinutes();

    if(min < 15) min = '00';
    else if(min < 30) min = '15';
    else if(min < 45) min = '30';
    else min = '45';

    return hour + ':' + min;
}

async function getData(key){
    try {
        const value = await AsyncStorage.getItem(key);
        return value != null ? JSON.parse(value) : null;
    } catch(e){

    }
}

async function storeData(key,value){
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
  }



/*
  Creates a month, 
  REQUERIES a start day,
            an hour

  
  u CAN'T create a month for 'out' option 
  because always will be first in option.
*/
function createMonth(day_key,hour) {
    let month = {
        'days': {
            day_key : {
                'in': hour,
                'out': undefined
            }
        }
    }
    return month;
}


function createDay(option,hour){
    let day = {
        'in': undefined,
        'out': undefined
    }
    day[option] = hour;

    return day;
}

export async function signRegistry (option, force) {
    const date = new Date();
    const key = getKey(date);
    const day_key = getDayKey(date);
    let current_month = await getData(key);
    if (current_month == null || current_month == undefined || current_month.days == undefined){ //no exists month
        current_month = createMonth(day_key,getHour(date));
    }
    else if(current_month.days[day_key] != undefined){ //exists
        if(current_month.days[day_key][option] != undefined && !force)
            return false;//ask to change
        else 
            current_month.days[day_key][option] =  getHour(date);
    }
    else{
        
        current_month.days[day_key] = createDay(option,getHour(date));

    }
    await storeData(key,current_month);
    return true;
    
}

export async function loadRegistry () {
    keys = await AsyncStorage.getAllKeys();
    
}
