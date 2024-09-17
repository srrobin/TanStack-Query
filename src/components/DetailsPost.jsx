import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { detailsPosts } from '../api/posts';
import { Button } from 'react-bootstrap';

const DetailsPost = () => {
    const {id} = useParams();
    const navigate = useNavigate()

    const {data, isLoading, isError, error} = useQuery({
        queryKey:["posts",id],
        queryFn: () => detailsPosts(id),
    })

    if(isLoading) return <> Loading ...</>
    if(isError) return " Error Message is ..." + error.message;

    
    console.log("🚀 ~ DetailsPost ~ data:", data)
    return (
            <div>
                <div className='post__item mb-5'> 
                    <h4 className='text-uppercase text-secondary'>{data.title}</h4>
                    <p>{data.desc}</p>
                    <Button onClick={()=>navigate(-1)}>Back</Button>
                  </div>
            </div>
    );
};

export default DetailsPost;
