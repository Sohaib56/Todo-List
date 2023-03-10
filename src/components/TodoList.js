import React, { useState } from 'react'


const TodoList = (props) => {

  const [complete, setComplete] = useState(true)


  return (
    <>
      <div className='container actions'>
        <div className='row'>
          <div className='col-md-6 tasks'>

            <div>
              {props.task}
            </div>
          </div>
          <div className='col-md-6'>

            <button className='del' onClick={() => {
              props.onSelect(props.id)
            }}><i class="fa-solid fa-trash-can"></i></button>
            <button className='edit' onClick={() => {
              props.onEdit(props.id)
            }}><i class="fa-solid fa-pen-to-square"></i></button>
            <button className='Complete' onClick={() => {
              setComplete(!complete)
            }}>{complete ? <i class="fa-regular fa-thumbs-up"></i> : <i class="fa-solid fa-thumbs-up"></i>}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList
