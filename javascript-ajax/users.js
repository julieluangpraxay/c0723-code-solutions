const $users = document.querySelector('#user-list');

function getUserList(list) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('status:', xhr.status);
    console.log('response:', xhr.response);
    for (let i = 0; i < xhr.response.length; i++) {
      const $list = document.createElement('li');
      $list.textContent = xhr.response[i].name;
      $users.appendChild($list);
    }
  });
  xhr.send();
}
getUserList('name');
