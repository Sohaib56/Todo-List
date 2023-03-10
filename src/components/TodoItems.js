import { useState, useEffect } from "react";
import "./TodoItems.css"
import TodoList from './TodoList'

const getLocalItem = () => {
  let list = localStorage.getItem('task');

  if (list) {
    return JSON.parse(localStorage.getItem('task'))
  }
  else {
    return [];
  }
}

const TodoItems = () => {

  const [items, setitems] = useState(getLocalItem());
  const [input, setinput] = useState("");

  const itemEvent = (e) => {

    setinput(e.target.value)
  }

  const inputList = () => {
    setitems((oldItems) => {
      return [...oldItems, input]
    })
    setinput("");
  }

  const editItem = (id) => {
    const newList = [...items];
    setinput(newList[id]);
    newList.splice(id, 1);
    setitems(newList);

  }

  const deleteItem = (id) => {
    setitems((oldItems) => {
      return items.filter((arrElements, index) => {
        return index !== id
      })
    })
  }

  useEffect(() => {

    localStorage.setItem('task', JSON.stringify(items))

  }, [items])

  return (
    <>
      <div>
        <img className='img' src='https://t3.ftcdn.net/jpg/03/91/46/10/360_F_391461057_5P0BOWl4lY442Zoo9rzEeJU0S2c1WDZR.jpg' />
      </div>
      <div className='container main'>

        <h3 className='heading'>Enter Your Text Here</h3>
        <div className=" container input">

          <input className='inputStyle' type="text" value={input} placeholder="Adding....."
            onChange={itemEvent}
          />
          <button className="btn add" onClick={inputList}><i class="fa-solid fa-plus"></i></button>
        </div>

        {/* <ul> */}


        {items.length === 0 ?
          <h3 className="Nothing">Nothing to Show</h3>
          :
          <div className='container head'>
            <div className='row'>
              <div className='col-md-6'>
                <h3>Tasks</h3>
              </div>
              <div className='col-md-6'>
                <h3>Actions</h3>
              </div>
            </div>
          </div>
        }
        {/* Add parentheses around the map block */}
        {items.map((item, index) => {
          return (
            <TodoList
              task={item}
              key={index}
              id={index}
              onSelect={deleteItem}
              onEdit={editItem}
            />
          );
        })}


      </div>
    </>
  )
}

export default TodoItems;

