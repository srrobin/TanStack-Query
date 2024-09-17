import React from 'react';
import CommonForm from "./CommonForm"
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createPosts } from '../api/posts';
const CreatePost = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn:createPosts,
        onSuccess: () => {
            queryClient.invalidateQueries("posts")
            navigate("/post")
        }
    })

    const handleSubmit = (formData) => {
        mutate({...formData});
    }
    return (
        <div>
            <CommonForm 
             title="Create Post Form !!!"
             handleSubmit={handleSubmit}
             initialValue={{}}
            />
        </div>
    );
};

export default CreatePost;