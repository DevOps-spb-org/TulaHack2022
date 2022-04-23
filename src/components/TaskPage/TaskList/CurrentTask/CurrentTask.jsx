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

  return (
    <>
      {task &&

        (<div className={style.currentContainer}>
          
          <div>
            <div className={style.currentRole}>Картинка</div>
            <div className={style.currentOwnerInfoCard}>
            </div>
          </div>
          <div>
            <div className={style.currentRole}>Лот</div>
            <div className={style.currentTaskContainer}>


              <div className={style.currentTaskHeader}>{task.title}</div>

              <div className={style.currentTaskInfoContainer}>
                <div className={style.currentTaskDeadline}>Оконачние ставок: {task.deadline.slice(0, 10)}</div>
                <div className={style.currentTaskTime}>Лот открыт: {task.createdAt.slice(0, 10)}</div>
              </div>
              <div className={style.currentTaskCategoryContainer}>
                <div className={style.currentTaskCategory}>{task.category}</div>
                <div className={style.currentTaskTag}>
                <div className={style.tasksvg}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tags" viewBox="0 0 16 16">
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                  </svg>
                </div>
                </div>
              </div>
              <div className={style.currentTaskSeparator}></div>
              <div className={style.currentTaskMainInfoContainer}>
                <div className={style.currentTaskMainHeader}>Описание лота:
                </div>
                <div className={style.currentTaskMainDescription}>
                  {task.description}
                </div>
              </div>
              <div className={style.currentTaskSeparator}></div>
              <div className={style.currentTaskStatusLevels}>Этапы</div>
              <div className={style.currentTaskStatusContainer}>

                <div className={style.currentTaskLevels}>

                  <div className={status === 1 ? style.currentTaskLevelDone : style.currentTaskLevel}>1. Лот открыт</div>
                </div>
                <div className={style.currentTaskLevels}>

                  <div className={status === 2 ? style.currentTaskLevelDone : style.currentTaskLevel}>2. Закрытие сделки</div>
                </div>
                <div className={style.currentTaskLevels}>

                  <div className={status === 3 ? style.currentTaskLevelDone : style.currentTaskLevel}>3. Итоги торгов</div>
                </div>


              </div>
              <button onClick={handleMatch} className={style.btn}>Продвинуть таску</button>
              <br />
              {status === 1 && (
                <>
                  <CommentList />
                  <Count deadline = {task.deadline} id = {id}/>
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
          </div>
        </div>)
      }
    </>
  )
}

export default CurrentTask
