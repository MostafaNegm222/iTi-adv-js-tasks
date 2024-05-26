
var xhrUsers = new XMLHttpRequest();
xhrUsers.open("get", "https://jsonplaceholder.typicode.com/posts");
  xhrUsers.send();
  xhrUsers.addEventListener("readystatechange", function () {
    if (xhrUsers.readyState === 4) {
      if (xhrUsers.status === 200) {
        console.log(xhrUsers.response);
        var users = JSON.parse(xhrUsers.response);
        console.log(users);
        displayPosts(users);


      }
    }
  });

    function displayPosts(posts) {
        var postsContainer = document.getElementById('posts-container');

        posts.forEach(post => {
            var postDiv = document.createElement('div');
            postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
            postDiv.classList.add('post');

            postsContainer.appendChild(postDiv);
        });
    }