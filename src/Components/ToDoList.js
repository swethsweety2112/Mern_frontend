import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const TodoList = () => {
    const [todo, setTodo] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState('');
    const [obj, setObj] = useState({});

    
    function create() {
        axios.post('http://localhost:5000/posting', {todo})
            .then(() => {
                alert('Data has been posted successfully');
                setTodo('');
                setAge('');
                setGender('');
                getData();
            })
            .catch(() => {
                alert('Failed to post data');
            });
    }

    function getData() {
        axios.get('http://localhost:5000/posting')
            .then((response) => {
                setTodos(response.data);
            })
            .catch(() => {
                alert('Failed to retrieve data');
            });
    }

    function getExactData(id) {
        axios.get(`http://localhost:5000/posting/${id}`)
            .then((resp) => {
                setObj(resp.data);
                alert('Data retrieved successfully');
            })
            .catch(() => {
                alert('Failed to retrieve specific data');
            });
    }

    function updateTodo(id, updatedTodo) {
        axios.put(`http://localhost:5000/posting/${id}`, updatedTodo)
            .then(() => {
                getData();
            })
            .catch(() => {
                alert("Failed to update data");
            });
    }

    function deleteTodo(id) {
        axios.delete(`http://localhost:5000/posting/${id}`)
            .then(() => {
                getData();
            })
            .catch(() => {
                alert("Failed to delete data");
            });
    }

    return (
        <div>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <TextField id="todo" label="Todo" variant="outlined" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <TextField id="age" label="Age" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)} style={{ marginLeft: '10px' }} />
                <TextField id="gender" label="Gender" variant="outlined" value={gender} onChange={(e) => setGender(e.target.value)} style={{ marginLeft: '10px' }} />
                <TextField id="id" label="ID" variant="outlined" value={id} onChange={(e) => setId(e.target.value)} style={{ marginLeft: '10px' }} />
                <Button variant="outlined" onClick={create} style={{ marginLeft: '10px' }}>Post</Button>
                <Button variant="outlined" onClick={getData} style={{ marginLeft: '10px' }}>Get All</Button>
                <Button variant="outlined" onClick={() => getExactData(id)} style={{ marginLeft: '10px' }}>Exact Data</Button>
            </div>

            <ol>
                {todos.map((item) => (
                    <li key={item.id}>{item.todo}, {item.age}, {item.gender}
                        <Button onClick={() => {
                            const newTodo = prompt("Enter the new todo");
                            const newAge = prompt("Enter the new age");
                            const newGender = prompt("Enter the new gender");
                            if (newTodo !== null && newAge !== null && newGender !== null) {
                                const updatedTodo = { todo: newTodo, age: newAge, gender: newGender };
                                updateTodo(item.id, updatedTodo);
                            } else {
                                alert("Please enter all fields");
                            }
                        }}>Edit</Button>
                        <Button onClick={() => deleteTodo(item.id)}>Delete</Button>
                    </li>
                ))}
            </ol>

            {obj.id && (
                <div>
                    <h3>Exact Data</h3>
                    <p>ID: {obj.id}</p>
                    <p>Todo: {obj.todo}</p>
                    <p>Age: {obj.age}</p>
                    <p>Gender: {obj.gender}</p>
                </div>
            )}
        </div>
    );
};

export default TodoList;
