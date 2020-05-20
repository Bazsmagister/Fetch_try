function fetcher() {
  fetch("index.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      console.log(body);
      alert(body);
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
    });
}
