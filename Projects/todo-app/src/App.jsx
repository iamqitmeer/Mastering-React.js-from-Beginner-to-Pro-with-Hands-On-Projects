import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoListApp() {

  const [inputValue, setInputValue] = useState('')
  const [item, setItem] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState()

  const addTodo = () => {
    const copyList = [...item]
    copyList.push(inputValue)
    setItem(copyList)

    setInputValue('')
  }

  const deleteTodo = (index) => {
    const copyList = [...item]
    copyList.splice(index, 1)
    setItem(copyList)
  }
  const editTodo = (index) => {
    const copyEditItem = item[index]
    setInputValue(copyEditItem)
    setEditMode(true)

    setCurrentIndex(index)
  }

  const updateTodo = () => {
    const copylist = [...item];
    copylist[currentIndex] = inputValue;
    setItem(copylist);

    setInputValue('')
    setEditMode(false)
  }

  const deleteAllTodos = () => {
    setItem([])
  }


  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-96 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">My Todo List</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Add a new todo..."
            className="flex-1 border-b-2 border-gray-300 focus:outline-none py-2 px-4 text-lg rounded-tl-lg"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {!editMode ? <button className="bg-blue-500 text-white py-2 px-6 rounded-tr-lg" onClick={addTodo}>Add</button> :
            <button className="bg-blue-500 text-white py-2 px-6 rounded-tr-lg" onClick={updateTodo}>Update</button>}
          {item.length > 0 ? <button className="bg-blue-500 text-white py-2 px-6 rounded-tr-lg" onClick={deleteAllTodos}>Delete All</button> : ''}


        </div>
        {item.map((item, index) => {
          return <ul key={item} className={editMode && currentIndex == index ? 'bg-slate-800 text-white' : 'bagi'}>
            <li className="flex justify-between items-center py-4">
              <span className="text-lg text-gray-800">{item}</span>
              <button className="text-red-500 hover:text-red-600 focus:outline-none">
                <button onClick={() => deleteTodo(index)}>Delete</button>
                <button className='m-3' onClick={() => editTodo(index)}>Edit</button>
              </button>
            </li>
          </ul>
        })}
      </div>
    </div>
  );
}

export default TodoListApp;