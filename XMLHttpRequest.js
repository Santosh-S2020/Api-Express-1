console.log("Hello, World!!");

const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users11");
request.send();

request.onload = () => {
  if (request.status === 200) {
    console.log("request sucessfull");
    console.log(JSON.parse(request.response));
  } else {
    console.log("request failed");
    console.log(request);
  }
};
