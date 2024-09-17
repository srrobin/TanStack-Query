import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useInView } from "react-intersection-observer";

const fetchFruits = ({ pageParam }) => {
    return axios.get(`http://localhost:5000/posts?_limit&_page=${pageParam}`);
}

const InfinityPagination2 = () => {

    const { data, error, status, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['items'],
      queryFn: fetchFruits,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

    if (status === 'pending') {
        return <h2>Page is Loading...</h2>
    }

    if (status === 'error' ) {
        return <h1>{error.message}</h1>
    }

    return (
        <div className='container'>
            {data?.pages?.map(page => {
                return page?.data.map(item => {
                    return  (<div className='post__item' key={item.id}> 
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <Button>Details</Button>{ " " }
                    <Button>Delete</Button>{ " " }
                    <Button>Update</Button>
                </div>
                )
                })
            })}
            <div ref={ref} style={{ color:"#fff", fontSize:"40px"}}>{isFetchingNextPage && "Loading..."}</div>
            
        </div>
    )
}

export default InfinityPagination2