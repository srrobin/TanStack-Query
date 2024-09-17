import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { Button } from 'react-bootstrap';
import { deletePosts, fetchLoadMorePosts } from '../api/posts';
import { Link } from 'react-router-dom';
const LoadmorePagi = () => {
    const queryClient = useQueryClient(); 
    const {  
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey:["posts"],
        queryFn: fetchLoadMorePosts,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if(allPages.length < 5 ){
                return allPages.length + 1
            } else{
                return undefined;
            }
       }
    })

    const { mutate } = useMutation({
        mutationFn: deletePosts,
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        },
    });

    // Delete button click handler
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            mutate(id);
        }
    };
        console.log("🚀 ~ AllInfinityPost ~ data:", data)
    if( status === 'pending') return <div style={{color:"#fff"}}>Loading ... </div>
    if(status === 'error') return <div style={{color:"#fff"}}>{error.message}</div>

    return (
        <div>
            <Link to="/create">
            <Button className='mb-5'>Create New Post </Button>
            </Link>
            {data?.pages.length === 0 ? "no information" :
            <> 
            {data?.pages.map((page) => {
                return   page?.data.map((item) => (
                    <div className='post__item mb-5' key={item.id}> 
                        <h4 className='text-uppercase text-secondary'>{item.title}</h4>
                        <p>{item.desc}</p>
                        <Link to={`/post/${item.id}`} > 
                           <Button className='btn-sm'>Details</Button>{ " " }
                        </Link>
                        <Button className='btn-sm' onClick={ () => handleDelete(item.id) }>Delete</Button>{ " " }
                        <Link to={`/update/${item.id}`} >
                          <Button className='btn-sm'>Update</Button>
                        </Link>
                    </div>
                   ))
            })}
            </>
            }

            <div>
                <Button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
                >
                {isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                    ? 'Load More'
                    : 'Nothing more to load'}
                </Button>
            </div>
        </div>
    );
};

export default LoadmorePagi;