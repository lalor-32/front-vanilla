import { getData } from './services/userService.js'

const URL = 'https://jsonplaceholder.typicode.com/todos'

getData(URL).then(todos => {
    let filas = todos.map(t => `
    <tr>
      <td>${t.id}</td>
      <td>${t.userId}</td>
      <td>${t.title}</td>
      <td>
        <span class="w3-tag ${t.completed ? 'w3-green' : 'w3-red'}">
          ${t.completed ? '✓ Completado' : '✗ Pendiente'}
        </span>
      </td>
    </tr>
  `).join('')

    document.querySelector('#list').innerHTML = `
    <table class="w3-table w3-striped w3-bordered w3-hoverable">
      <thead class="w3-orange">
        <tr>
          <th>ID</th><th>Usuario</th><th>Tarea</th><th>Estado</th>
        </tr>
      </thead>
      <tbody>${filas}</tbody>
    </table>
  `
}).catch(err => console.error(err))