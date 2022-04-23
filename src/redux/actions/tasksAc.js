import axios from 'axios'
import { ADD_TASK, ALL_TASKS, TASK_UP, FILTER_TASK, SEARCH_TASK } from '../types/tasksTypes'

export const allTasks = () => (dispatch) => {
  // fetch('http://localhost:3001/')
  //   .then(res => res.json())
  //   .then(data => dispatch({
  //     type: ALL_TASKS,
  //     payload: data
  //   }))
    let data = [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        category: 'Антиквариат',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula ipsum id enim tincidunt, vel egestas arcu euismod. Vestibulum ipsum massa, fringilla nec placerat vitae, eleifend at lectus.',
        deadline: '2022-04-23 16:30:00',
        isDone: false,
        status: 1,
        owner: 4,
        worker: null,
        createdAt: '2022-01-15 02:00:00',
        updatedAt: '2022-01-15 02:00:00',
        USER: {
          name: 'Christies Auction House',
          avatar: 'https://brandslogos.com/wp-content/uploads/thumbs/christies-logo-vector.svg',
        }
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet',
        category: 'Антиквариат',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula ipsum id enim tincidunt, vel egestas arcu euismod. Vestibulum ipsum massa, fringilla nec placerat vitae, eleifend at lectus.',
        deadline: '2022-02-14 02:00:00',
        isDone: false,
        status: 1,
        owner: 2,
        worker: 6,
        createdAt: '2022-01-17 02:00:00',
        updatedAt: '2022-01-17 02:00:00',
        USER: {
          name: 'Christies Auction House',
          avatar: 'https://brandslogos.com/wp-content/uploads/thumbs/christies-logo-vector.svg',
        }
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet',
        category: 'Антиквариат',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula ipsum id enim tincidunt, vel egestas arcu euismod. Vestibulum ipsum massa, fringilla nec placerat vitae, eleifend at lectus.',
        deadline: '2022-02-14 02:00:00',
        isDone: true,
        status: 3,
        owner: 5,
        worker: 7,
        createdAt: '2022-01-19 02:00:00',
        updatedAt: '2022-01-19 02:00:00',
        USER: {
          name: 'Christies Auction House',
          avatar: 'https://brandslogos.com/wp-content/uploads/thumbs/christies-logo-vector.svg',
        }
      },
    ]
    dispatch({
      type: ALL_TASKS,
      payload: data
    })
}
export const addTask = (response) => ({
  type: ADD_TASK,
  payload: response,
})

export const addTaskThunk = (task) => async (dispatch) => {

  const userFromBack = await axios.post('http://localhost:3001/tasks', { task })
  const response = userFromBack.data
  dispatch(addTask(response))
}

export const upTask = (response) => ({
  type: TASK_UP,
  payload: response,
})

export const upTaskThunk = (task_id) => async (dispatch) => {
  // const userFromBack = await axios.patch('http://localhost:3001/tasks', { task_id, user_id })
  // const response = ''
  dispatch(upTask(task_id))
}

export const filteredTask = (data) => (dispatch) => {

  dispatch({
    type: FILTER_TASK,
    payload: data
  })
}

export const searchTask = (data) => (dispatch) => {
  dispatch({
    type: SEARCH_TASK,
    payload: data
  })
}

export const deleteTask = (response) => ({
  type: TASK_UP,
  payload: response,
})

export const deleteTaskThunk = (task_id) => async (dispatch) => {
  const userFromBack = await axios.patch('http://localhost:3001/tasks/delete', { task_id })
  const response = userFromBack.data
  dispatch(deleteTask(response))
}
