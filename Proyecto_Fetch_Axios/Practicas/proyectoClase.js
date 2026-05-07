// 1. Consultar una api publica
// 2. listar los primeros 5 usuarios
// 3. para cada usuario, mostrar cuantos post tiene
// 4. manejar errores si algo falla

const API = "https://jsonplaceholder.typicode.com";

function obtenerUsuario() {
    return fetch(`${API}/users`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error al obtener los usuarios");
            }
            return res.json()
        })
        .then((data) => data.slice(0, 5))
        .catch((error) => console.error(error));
}

function obtenerPost(userId) {
    return fetch(`${API}/posts?userId=${userId}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error al obtener los posts");
            }
            return res.json()
        })
        .catch((error) => console.error(error));
}

obtenerUsuario().then((users) => {
    console.log(users);
    users.forEach((user) => {
        obtenerPost(user.id).then((posts) => {
            console.log(posts);
        })
    })
})