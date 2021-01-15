import { useState } from 'react';



export const useLocalStorage = (startValue, key) => {
    const [savedValue, setSavedValue ] = useState(() =>{
        if(window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(startValue));
        return startValue;
    });
    const setValue = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setSavedValue(value)
    };
    return [savedValue, setValue];
};