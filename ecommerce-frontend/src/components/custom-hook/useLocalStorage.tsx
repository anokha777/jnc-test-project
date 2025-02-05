import { useState, useEffect } from "react";
import {StoredCategoryData} from '../types/ecommerce'
function getSavedValue(key: string, initialValue:  null | StoredCategoryData) {
    const storedValue = localStorage.getItem(key) as string;
    const savedValue = JSON.parse(storedValue);
    const getInitialValue =() => {
        
        return (initialValue instanceof Function) ? initialValue() : initialValue;
    }
    return savedValue ?? getInitialValue();
}

export default function useLocalStorage(key: string, initialValue: null | StoredCategoryData) {
    const [value, setValue]= useState(() => getSavedValue(key, initialValue));

    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    

    return [value, setValue];

}