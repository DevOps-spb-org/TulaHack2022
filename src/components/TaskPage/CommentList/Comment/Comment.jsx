import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'

function Comment( { comment, user_id, task_id }) {
  
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  const tasks = useSelector((state) => state.tasks)
  const owner = useSelector((state) => state.user)
  const user = users.filter(el => el.id === user_id)[0]
  const task = tasks.filter(el => el.id === task_id)[0]
  useEffect(() => {
  
  }, [])

  return (
    <>
      {user && task && (
        <div className={style.mainContainer}>
          <div className={style.userContainer}>
            <img className={style.img} src={user.avatar}></img>
            <div>{ user.name } / ставка:</div>
          </div>
          <div>
            {comment}
          </div>
        </div>
      )}
    </>
  )
}

export default Comment

