import React from 'react';
import CommonForm from "./CommonForm"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { detailsPosts, updatePosts } from '../../api/posts';

const UpdatePost = () => {
 const {id} = useParams();
 const navigate = useNavigate();
 const queryClient = useQueryClient();
  const {data, isLoading, isError, error} = useQuery({
         queryKey:["posts", id],
         queryFn:() => detailsPosts(id)
  })
  
  const {mutate} = useMutation({
     mutationFn: updatePosts,
     onSuccess: () => {
       queryClient.invalidateQueries(["posts", id])
       navigate("/post");
     }
  })

  const handleSubmit = (formData) => {
    mutate({
      id, ...formData
    })
  }
  console.log("🚀 ~ AllInfinityPost ~ data:", data)
  if( isLoading) return <div style={{color:"#fff"}}>Loading ... </div>
  if(isError) return <div style={{color:"#fff"}}>{error.message}</div>

    return (
        <div>
         <CommonForm 
          title="Update Your Post !!!"
          handleSubmit={handleSubmit}
          initialValue={data}
         />
        </div>
    );
};

export default UpdatePost;