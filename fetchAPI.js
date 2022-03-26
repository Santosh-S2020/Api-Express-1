console.log("Hello, World fetc method!!");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((res) => console.log(res));

async function getUser() {
  response = await fetch("http://127.0.0.1:3000/v1/users");
  users = await response.json();
  console.log(users);
}

getUser();
