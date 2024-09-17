import React from 'react';
import CommonForm from "./CommonForm"
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createPosts } from '../../api/posts';
const CreatePost = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn:createPosts,
        onSuccess: (newData) => {
            queryClient.invalidateQueries("posts")
            navigate("/post")


            // queryClient.setQueryData(["posts"],(oldData) => {
            //     return{
            //         ...oldData,
            //         data:[...oldData.data, newData.data] 
            //     }
            // });



        // onMutate: async(newData) => {
        //     await queryClient.cancelQueries(["posts"]);
        //     const prevPostData = queryClient.getQueryData(["posts"]);

        //     queryClient.setQueryData(["posts"], (oldData) => {
        //         return{
        //             ...oldData,
        //             data:[...oldData.data, {...newData, id: String(oldData?.data.length + 1)}]
        //         }
        //     })
        //     return{
        //         prevPostData
        //     }
            
        // },
        // onError:(_error,_post, context) => {
        //     queryClient.setQueryData(["posts",context.prevPostData])
        // },
        // onSettled:() => {
        //     queryClient.invalidateQueries(["posts"])
        // }
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