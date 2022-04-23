import { ALL_USERS } from '../types/usersTypes'
import { SEARCH_WORKER } from '../types/userTypes'

export const getAllUsers = () => (dispatch) => {

  // fetch('http://localhost:3001/users')
  //   .then(res => res.json())
  //   .then(data => dispatch({
  //     type: ALL_USERS,
  //     payload: data
  //   }))
    let data = [
      {
        id: 1,
        name: 'Zalando',
        email: 'merch@gmail.com',
        role: 2,
        avatar: 'https://brandslogos.com/wp-content/uploads/thumbs/christies-logo-vector.svg',
        password: '123',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        id: 2,
        name: 'Hood Media',
        email: 'merch@gmail.com',
        role: 2,
        avatar: 'https://brandslogos.com/wp-content/uploads/thumbs/christies-logo-vector.svg',
        password: '123',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        id: 3,
        name: 'Google merchant',
        email: 'merch@gmail.com',
        role: 3,
        avatar: 'https://brandslogos.com/wp-content/uploads/thumbs/christies-logo-vector.svg',
        password: '123',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      },
      {
        id: 4,
        name: 'Ebay',
        email: 'merch@gmail.com',
        role: 3,
        avatar: 'https://brandslogos.com/wp-content/uploads/thumbs/christies-logo-vector.svg',
        password: '123',
        resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: '2013-10-27 02:00:00',
        updatedAt: '2013-10-27 02:00:00',
      }
    ];
    dispatch({
      type: ALL_USERS,
      payload: data
    })
}

export const searchUser = (data) => (dispatch) => {
  dispatch({
    type: SEARCH_WORKER,
    payload: data
  })
}
