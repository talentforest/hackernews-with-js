const ajax = new XMLHttpRequest();
const BASE_URL = "https://hacker-news.firebaseio.com/v0/"
const TOP_ID_URL = `${BASE_URL}topstories.json`

ajax.open('GET', TOP_ID_URL, false);
ajax.send();

const topStoriesId = JSON.parse(ajax.response).slice(0, 5);
const ul = document.createElement('ul');

for (let i = 0; i < topStoriesId.length; i++) {
  ajax.open('GET', `${BASE_URL}item/${topStoriesId[i]}.json`, false);
  ajax.send();

  const topStory = JSON.parse(ajax.response)

  const li = document.createElement('li');
  li.innerHTML = topStory.title;
  ul.appendChild(li)
}

document.getElementById('root').appendChild(ul);
