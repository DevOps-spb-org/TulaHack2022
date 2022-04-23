import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import Count from "./Count";

import CommentList from '../../CommentList/CommentList'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FeedbackList from '../../FeedbackList/FeebackList'
import Chat from '../../../Chat/Chat'
import { deleteTaskThunk } from '../../../../redux/actions/tasksAc'
import { upTaskThunk } from '../../../../redux/actions/tasksAc';

function CurrentTask() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [status, setStatus] = useState(1)
  const user = useSelector((state) => state.user)
  const tasks = useSelector(state => state.tasks)
  const task = tasks.find((el) => el.id === +id);
  console.log('TASK', task)

  useEffect(() => {
    if (task) {
      setStatus(task.status)
    }
  }, [tasks])

  const clickHandler = () => {
    dispatch(deleteTaskThunk(id))
    navigate('/')
  }

  const handleMatch = () => {
    console.log('HELLO')
    dispatch(upTaskThunk(id))
  }

  console.log('HEY', task)

  return (
    <>
      {task &&

        (<div className={style.currentContainer}>
          <div className={style.imgLot}>
            <img src={task.image} alt=''/>
          </div>
          <div>
            <div className={style.currentTaskContainer}>


              <h1 className={style.currentTaskHeader}>{task.title}</h1>
              <h3>ID {task.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{task.createdAt}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;редактировать</h3>
              <br/>
              <p>Продавец</p>
              <div>
                <img className={style.ava} src={task.USER.avatar}/>
                <span className={style.avaSpan}>{task.USER.name}</span>
              </div>

              <div className={style.devide}>
                <p>Описание</p>
                <div className={style.devide1}></div>
                <div className={style.devide2}></div>
              </div>

              <p className={style.description}>{task.description}... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing.</p>

              <br/>
              <p className={style.countBefore}>До окончания аукциона: &nbsp;&nbsp;&nbsp;&nbsp;
                <span className={style.count}>
                  <Count deadline = {task.deadline} id = {id}/>
                </span>
              </p>

              <div className={style.btnGroup}>
              <div className={style.search}>
                <div>
                  <input className={style.search2} type="text"/>
                </div>
              </div>  

                <button type="button" className={style.join2}>
                  <span className={style.btnText}>Предложить цену</span>
                </button>
              </div>

             
            </div>
     
              {status === 1 && (
                <>
                  <CommentList />
                </>
              )}
              {status === 2 && (
                <Chat task={task} />
                )}
              {status === 3 && (
                <FeedbackList />
                )}
              {user !== null && task.owner === user.id && (
                <button onClick={clickHandler} className={style.btn}>Удалить задачу</button>
                )}
          </div>
        </div>)
      }
      <button onClick={handleMatch} className={style.btn}>Продвинуть таску</button>
    </>
  )
}

export default CurrentTask
