import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { debounceFetch } from '../../api/posts';
import { Form } from 'react-bootstrap';
import LoadingBlock from '../../utils/LoadingBlock';
import ErrorBlock from '../../utils/ErrorBlock';
import {useDebounce} from '../../components/CustomHook/useDebounce';

const DebounceSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const debounceValue = useDebounce(searchTerm, 250)
    console.log("🚀 ~ DebounceSearch ~ debounceValue:", debounceValue)

    const {data, isLoading, isError, error} = useQuery({
        queryKey:["posts", { query: debounceValue }],
        queryFn: () => debounceFetch(debounceValue),
        placeholderData: keepPreviousData
    })
   
    
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };


    let content = ""
    if(isLoading) {
        content = <LoadingBlock/>
    }
    if(isError) {
        content = <ErrorBlock message={error.message}/>
    };

    if(data?.users && data?.users.length > 0){
        content = data?.users.map((item) => (
            <div className='debounce_title' key={item.id}>{item.firstName}</div>
           ))
    }
    return (
        <div>
            <div className='search_area'> 
                <Form.Group  className="mb-3">
                <Form.Label>Search Here</Form.Label>
                <Form.Control
                type="text"
                placeholder='Search post'
                value={searchTerm}
                onChange={handleChange}
                />
                </Form.Group>
            </div>
            <> 
            {content}
            </>
        </div>
    );
};

export default DebounceSearch;