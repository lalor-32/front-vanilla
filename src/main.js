import { getData } from './services/userService.js'

getData('https://jsonplaceholder.typicode.com/users')
  .then(users => console.log(users))