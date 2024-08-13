import axios from "axios";

const getTodos = async () => {
    const getUrl = `${process.env.REACT_APP_TODO_API_URL}/todo.json`;
    console.log('Fetching URL:', getUrl);   
    try {
        const response = await axios.get(getUrl);

        if (!response.data) return [];

        const todosArray = Object.keys(response.data).map(key => response.data[key]);
        return todosArray; 
    } catch (error) {
        console.error('에러발생', error);
        throw error;
    }
};

const putTodos = async (todoId, data) => {
    const putUrl = `${process.env.REACT_APP_TODO_API_URL}/todo/${todoId}.json`;
    const response = await axios.put(putUrl, data);
    return response.data; 
};

const updateTodos = async (todoId, data) => {
    const patchUrl = `${process.env.REACT_APP_TODO_API_URL}/todo/${todoId}.json`;
    const response = await axios.patch(patchUrl, data);
    return response.data; 
};

const deleteTodos = async (todoId) => {
    const deleteUrl = `${process.env.REACT_APP_TODO_API_URL}/todo/${todoId}.json`;
    try {
        const response = await axios.delete(deleteUrl);
        return response.data; 
    } catch (error) {
        console.error('삭제에러', error);
        throw error;
    }
};

export { getTodos, putTodos, updateTodos, deleteTodos };
