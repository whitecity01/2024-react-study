import axios from 'axios';
import { firebaseConfig } from '../configs/firebaseConfig';

// firebase의 todos: 
// {
// 	"0": {
// 		id: 0,
// 		text: '할 일 0,
// 		done: false
// 	},
// "1": {
// 		id: 2,
// 		text: '할 일 1,
// 		done: false
// 	},
//   ...
// }

const baseURL = firebaseConfig.databaseURL; // 데베주소 상수로 선언

export const getTodos = async () => { // todos 얻기
  try {
    const response = await axios.get(`${baseURL}/todo.json`); 
    const data = response.data; // data부분 추출

    // object를 배열로 반환! <= 이거 함수모르면 어케 추출하노..
    // map으로 순회하여 배열로 변환
    const todos = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];

    // console.log(todos);
    return todos;

  } catch (error) { // 에러 헨들링
    console.error('Error: get', error);
    throw error;
  }
};

export const getNextId = async () => {
  try {
    const response = await axios.get(`${baseURL}/todo.json`);
    const data = response.data;

    if (!data) { // 데이터가 없다면 id는 0으로
      return 0;
    }

    // key를 10진수로 읽어서 배열로 변환
    const keys = Object.keys(data).map(key => parseInt(key, 10));

    // 다음 키는 마지막 요소의 +1
    const nextKey = keys[keys.length - 1];
    return nextKey + 1;

  } catch (error) { // 에러 헨들링
    console.error('Error: get', error);
    throw error;
  }
}

export const addTodo = async (todo) => {
  const id = await getNextId();  // 다음 키 가져오기
  todo.id = id;

  try {
    const response = await axios.put(`${baseURL}/todo/${todo.id}.json`, todo); // 데이터 추가

    return response.data;
  } catch (error) { // 에러 헨들링
    console.error('Error: put', error);
    throw error;
  }
};

export const updateTodo = async (id, updatedFields) => {
  try {
    const response = await axios.patch(`${baseURL}/todo/${id}.json`, updatedFields); // 데이터 업데이트

    return response.data;
  } catch (error) { // 에러 헨들링
    console.error('Error: patch', error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/todo/${id}.json`); // 데이터 삭제

    return response.data;
  } catch (error) { // 에러 헨들링
    console.error('Error: delete', error);
    throw error;
  }
};



// export const deleteAllTodos = async () => {
//   try {
//     await axios.delete(`${baseURL}/todo.json`); // 'todo' 경로 전체를 삭제
//     console.log('All todos have been deleted.');
//   } catch (error) {
//     console.error('Error deleting all todos:', error);
//     throw error;
//   }
// };

