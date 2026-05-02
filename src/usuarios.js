import { getData } from './services/userService.js'

const URL = 'https://jsonplaceholder.typicode.com/users'

getData(URL).then(users => {
    let filas = users.map(u => `
    <tr>
      <td>${u.id}</td>
      <td>${u.name}</td>
      <td>${u.username}</td>
      <td>${u.email}</td>
      <td>${u.address.city}</td>
      <td>${u.company.name}</td>
    </tr>
  `).join('')

    document.querySelector('#list').innerHTML = `
    <table class="w3-table w3-striped w3-bordered w3-hoverable">
      <thead class="w3-blue">
        <tr>
          <th>ID</th><th>Nombre</th><th>Usuario</th>
          <th>Email</th><th>Ciudad</th><th>Empresa</th>
        </tr>
      </thead>
      <tbody>${filas}</tbody>
    </table>
  `
}).catch(err => console.error(err))