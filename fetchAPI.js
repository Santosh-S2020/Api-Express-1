console.log("Hello, World fetc method!!");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((res) => console.log(res));

async function getUser() {
  response = await fetch("http://localhost:3000/v1/users");
  users = await response.json();
  console.log(users);
}

getUser();

const nameUser = {
  firstName: "John",
  lastName: "Doe",
  address: "Scranton-PA",
};
async function postUser(nameUser) {
  // console.log(nameUser);
  response = await fetch(
    "https://ve19f9uie2.execute-api.us-east-1.amazonaws.com/DEV/users",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify(nameUser),
    }
  );
  const newUsers = await response.json();
  console.log(newUsers);
}

postUser(nameUser);
