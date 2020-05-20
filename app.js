function textfetcher() {
  fetch("index.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      console.log(body);
      alert(body);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function jsonfetcher() {
  fetch("json.txt")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      alert(data.user1);
      alert(data.user2);
      alert(data.user3);
    })
    .catch(function (error) {
      console.log(error);
    });
}

//ES 6 arrow functions:
function jsonfetcherwitharrows() {
  fetch("json.txt")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Prints result from `response.json()` in getRequest
      // alert(data); //object Object
      alert(data.user1);
      alert(data.user2);
      alert(data.user3);
    })
    .catch((error) => console.log(error));
  // .catch((error) => console.error(error));
}
