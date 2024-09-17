import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button } from 'react-bootstrap';
import {fetchPosts} from "../../api/posts"
const AllPost = () => {

    const {data, isLoading ,isError,error,refetch} = useQuery({
        queryKey:["posts"],
        queryFn: () => fetchPosts()

        //  enabled: false  // means fatching data is off , if use refetch fetch enable
        //  staleTime:20000 
        // refetchInterval:1000 // pulling off when other tabs
        // refetchIntervalInBackground:true //   pulling on when other tabs
    })

    if(isLoading) return <div style={{color:"#fff"}}>Loading ... </div>
    if(isError) return <div style={{color:"#fff"}}>{error.message}</div>

    return (
        <div>
              <Button variant="danger" onClick={refetch} disabled>Refetch Post</Button>
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