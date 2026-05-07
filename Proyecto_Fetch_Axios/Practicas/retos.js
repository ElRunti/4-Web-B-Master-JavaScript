const API = "https://jsonplaceholder.typicode.com";

Promise.all([
  fetch(`${API}/users/1`).then((r) => r.json()),
  fetch(`${API}/posts/1`).then((r) => r.json()),
]).then(([usuario, post]) => {
  console.log(usuario.name);
  console.log(post.title);
});

const inicio = Date.now();

fetch(`${API}/users`)
  .then((res) => res.json())
  .then(() => {
    const ms = Date.now() - inicio;
    console.log(`La API tardó ${ms} ms`);
  });

fetch(`${API}/posts`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Mi post",
    body: "Hola mundo",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch(`${API}/posts`)
  .then((res) => res.json())
  .then((posts) => {
    const filtrados = posts.filter((post) =>
      post.title.includes("qui")
    );

    console.log(`Se encontraron ${filtrados.length} posts`);

    filtrados.forEach((post) => {
      console.log(post.title);
    });
  });

fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.value);
  });