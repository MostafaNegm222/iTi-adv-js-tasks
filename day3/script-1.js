///////////////////////ajax//////////////////////
//asyn. js and xml

var xhrUsers = new XMLHttpRequest();
// console.log(xhrUsers);

// xhrUsers.open("get", "https://jsonplaceholder.typicode.com/users");
// xhrUsers.send();

// if (xhrUsers.readyState === 4) {
//   alert(xhrUsers.response);
// }

////////////////////////////////////////////

var btn = document.getElementsByClassName("btn")[0];
var div = document.getElementsByTagName("div")[0];

function getUsers() {
  xhrUsers.open("get", "https://jsonplaceholder.typicode.com/users");
  xhrUsers.send();
}

btn.addEventListener("click", getUsers);
xhrUsers.addEventListener("readystatechange", function () {
    if (xhrUsers.readyState === 4) {
      if (xhrUsers.status === 200) {
        console.log(xhrUsers.response);
        var users = JSON.parse(xhrUsers.response);
        console.log(users);
        users.forEach(function (el) {
          // console.log(el);
          div.innerHTML += "<p>" + el.name + "" + el.id + "</p>";
        });
      }
    }
  });