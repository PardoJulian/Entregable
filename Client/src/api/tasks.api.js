import axios from 'axios';

const tasksApi = axios.create({
    baseURL: 'htpp://localhost:8000/tasks/api/v1/tasks/',
});

export const getAllTasks = () => tasksApi.get("/");
export const getTask = (id) => tasksApi.get(`/${id}/`);
export const createTask = (task) => tasksApi.post("/", task);
export const deleteTask = (id) => taskApi.delete(`/${id}`)
export const updateTask = (id, task) => tasksApi.put(`/${id}/`,task)