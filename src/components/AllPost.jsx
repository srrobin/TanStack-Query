import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchPosts } from '../api/posts';
import { Button } from 'react-bootstrap';
const AllPost = () => {

    const {data, isLoading ,isError,error} = useQuery({
        queryKey:["posts"],
        queryFn: () => fetchPosts()
    })

    if(isLoading) return <div style={{color:"#fff"}}>Loading ... </div>
    if(isError) return <div style={{color:"#fff"}}>{error.message}</div>

    return (
        <div>
           {data?.map((item) => (
            <div className='post__item'> 
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <Button>Details</Button>{ " " }
                <Button>Delete</Button>{ " " }
                <Button>Update</Button>
            </div>
           ))}
        </div>
    );
};

export default AllPost;