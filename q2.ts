// ปุญณพัฒน์ ภาณุมนต์วาที 640610692

// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try{
    const ResponseTodo = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = ResponseTodo.data;
    const userId = todo.userId

    const ResponseUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const User = ResponseUser.data;

    return {
      owner: User.name,
      title: todo.title,
      completed: todo.completed
    };
  }  
  catch (error) {
    return 'INVALID TODO ID';
  }
  };

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
