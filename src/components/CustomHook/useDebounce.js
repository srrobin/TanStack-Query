import { useEffect, useState } from "react";

export function useDebounce(value, delay){
 const[debounce,setDebounce] = useState('');

 useEffect(() =>{
    const timeoutHandler = setTimeout(() => {
        setDebounce(value);
    },delay)
    return () => {
        clearTimeout(timeoutHandler)
    }
 },[value,delay ])
 return debounce;

}