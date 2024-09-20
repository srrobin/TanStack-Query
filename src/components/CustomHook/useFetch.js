import axios from "axios";
import { useEffect, useState } from "react";


export default function useFetch(url){

    const [data,setdata] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    useEffect(() => {

        const fetchData = async () => {
           try {
             setLoading(true);
             const response = await axios.get(url);
             setdata(response.data);
             
           } catch (error) {
            setError(error);
            setLoading(false);
           }
        }
        fetchData();
},[url])
return { data, loading, error}

}