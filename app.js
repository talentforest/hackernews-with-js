const ajax = new XMLHttpRequest();
const NEWS_URL = "https://hacker-news.firebaseio.com/v0/item/8863.json"

ajax.open('GET', NEWS_URL, false);
ajax.send();

const news = JSON.parse(ajax.response);

const ul = document.createElement('ul');
const li = document.createElement('li');

li.innerHTML = news.title;
ul.appendChild(li)

document.getElementById('root').appendChild(ul);
