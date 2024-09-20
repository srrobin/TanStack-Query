
import axios from "axios";
const BASE_URL = "https://667625f2a8d2b4d072f28bf3.mockapi.io";
const axiosInstance  = axios.create({baseURL:BASE_URL})

export const fetchUsers= async () => {
    const res = await axiosInstance.get("/users");
    return res.data
}

export const creteUser = async (data) => {
    const res = await axiosInstance.post("/users", data);
    return res.data
}

export const updateUser = async (id, data) => {
    const res = await axiosInstance.put(`/users/${id}`, data);
    return res.data
}

export const deleteUser = async (id) => {
    const res = await axiosInstance.delete(`/users/${id}`);
    return res.data
}