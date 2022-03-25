console.log("Hello, World fetc method!!");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((res) => console.log(res));

async function getUser() {
  response = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await response.json();
  console.log(users);
}

getUser();
