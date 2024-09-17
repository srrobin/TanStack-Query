import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { fetchPaginationPosts } from '../api/posts';
import { Button, Pagination } from 'react-bootstrap';
const AllPost = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {data, isLoading ,isError,error} = useQuery({
        queryKey:["posts", currentPage],
        queryFn: () => fetchPaginationPosts(currentPage),
        placeholderData: keepPreviousData
    })
    console.log("🚀 ~ AllPost ~ data:", data)
     
    const handlePagination = (page) => {
         setCurrentPage(page);
    }

    if(isLoading) return <div style={{color:"#fff"}}>Loading ... </div>
    if(isError) return <div style={{color:"#fff"}}>{error.message}</div>

    return (
        <div>
           {data?.data.map((item) => (
            <div className='post__item'> 
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <Button>Details</Button>{ " " }
                <Button>Delete</Button>{ " " }
                <Button>Update</Button>
            </div>
           ))}

            <Pagination className='mt-3'>
            <Pagination.Prev 
             onClick={() => handlePagination(currentPage - 1)}
             disabled={currentPage === 1}
            > Prev page</Pagination.Prev>
           {[...Array(data.pages).keys()].map((pageNumber) =>(
            <Pagination.Item key={pageNumber+1} onClick={() => handlePagination( pageNumber + 1)} active = {pageNumber + 1 === currentPage}>{pageNumber + 1}</Pagination.Item>
           ))}

            <Pagination.Next 
            onClick={() => handlePagination(currentPage + 1)}
            disabled={currentPage === data.pages}
            >Next Page</Pagination.Next>
            </Pagination>
        </div>
    );
};

export default AllPost;