import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { fetchInfinityPosts } from '../../api/posts';
import { Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
const InfinityPagination = () => {

    const { 
        data,
        error,
        isError,
        isLoading,
        fetchNextPage,
        isFetchingNextPage
  
        } = useInfiniteQuery({
        queryKey:["posts"],
        queryFn: fetchInfinityPosts,
        initialPageParam: 1,
        // getNextPageParam: (lastPage, allPages) => {
        //     return lastPage.length === 0 ? null :  allPages.length + 1 ; 
        // }
        getNextPageParam: (_lastPage, allPages) => {
            if(allPages.length < 5 ){
                return allPages.length + 1
            } else{
                return undefined;
            }
       }

    })
 

    const { ref, inView } = useInView()
    useEffect(() => {
        if(inView){
            fetchNextPage();
        }
    },[fetchNextPage,inView])

    if(isLoading) return <div style={{color:"#fff"}}>Loading ... </div>
    if(isError) return <div style={{color:"#fff"}}>{error.message}</div>

    return (
       
        <div>
            {data?.pages?.map((page) => {
                return  page?.data.map((item) => (
                    <div className='post__item' key={item.id}> 
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                        <Button>Details</Button>{ " " }
                        <Button>Delete</Button>{ " " }
                        <Button>Update</Button>
                    </div>
                   ))
            })}

             <div ref={ref}>{isFetchingNextPage && "Loading ... "}</div>
           </div>
    );
};

export default InfinityPagination;