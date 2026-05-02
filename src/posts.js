import { getData } from './services/userService.js'

const URL = 'https://jsonplaceholder.typicode.com/posts'

getData(URL).then(posts => {
    let filas = posts.map(p => `
    <tr>
      <td>${p.id}</td>
      <td>${p.userId}</td>
      <td>${p.title}</td>
      <td>${p.body}</td>
    </tr>
  `).join('')

    document.querySelector('#list').innerHTML = `
    <table class="w3-table w3-striped w3-bordered w3-hoverable">
      <thead class="w3-teal">
        <tr>
          <th>ID</th><th>Usuario</th><th>Título</th><th>Contenido</th>
        </tr>
      </thead>
      <tbody>${filas}</tbody>
    </table>
  `
}).catch(err => console.error(err))