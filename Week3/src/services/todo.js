import axios from "axios";
const SERVER_IP = process.env.REACT_APP_SERVER_API;

const todoAPI = async (url, method, data = null) => {
  try {
    const res = await axios({
      method: method,
      url: `${SERVER_IP}/${url}`,
      data: method === "get" ? {} : data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    throw new Error(e.response ? e.response.data : "API request failed");
  }
};

const getTodoAPI = async () => {
  const res = await todoAPI("todo.json", "get");
  return res.data;
};

const addTodoAPI = async (newId, newTodo) => {
  const res = await todoAPI(`todo/${newId}.json`, "put", newTodo);
  return res;
};

const updateTodoAPI = async (Id, updateTodo) => {
  const res = await todoAPI(`todo/${Id}.json`, "patch", updateTodo);
  return res;
};

const deleteTodoAPI = async (Id) => {
  const res = await todoAPI(`todo/${Id}.json`, "delete");
  return res;
};

export { getTodoAPI, addTodoAPI, updateTodoAPI, deleteTodoAPI };
