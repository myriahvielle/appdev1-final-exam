import axios from "axios";
const API_URL = import.meta.env.VITE_APP_API_URL;

export const getTodosAPI = function () {
    return axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(response => response.data);
};

export const addTodoAPI = function (todo) {
    return axios
        .post("https://jsonplaceholder.typicode.com/todos", todo)
        .then(response => response.data);
};

export const updateTodoAPI = function (todo) {
    return axios
        .put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
        .then(response => response.data);
};

export const deleteTodoAPI = function (id) {
    return axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => id);
};