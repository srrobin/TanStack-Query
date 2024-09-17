import axios from "axios"

const BASE_URL = "http://localhost:5000"
const axiosInstance = axios.create({baseURL:BASE_URL})


export const fetchPosts =async (page  ) => {
   const res = await axiosInstance.get(`/posts`);
   return res.data;
}
export const fetchLoadMorePosts = async ({pageParam}) => {
   const res = await axiosInstance.get(`/posts?_page=${pageParam}&_per_page=2`);
   return res.data;
}
export const fetchPaginationPosts = async (page) => {
   const res = await axiosInstance.get(`/posts?_page=${page}&_per_page=2`);
   return res.data;
}
export const fetchInfinityPosts = async ({pageParam}) => {
   const res = await axiosInstance.get(`/posts?_page=${pageParam}`);
   return res.data;
}

export const createPosts = async(newPost) => { 
   const res = await axiosInstance.post("/posts", newPost);
   return res.data;
}

export const detailsPosts = async (id) => { 
   const res = await axiosInstance.get(`/posts/${id}`);
   return res.data;
}
export const updatePosts = async (updatePost) => { 
   const res = await axiosInstance.put(`/posts/${updatePost.id}`, updatePost);
   return res.data;
}
export const deletePosts = async (id) => { 
   const res = await axiosInstance.delete(`/posts/${id}`);
   return res.data;
}