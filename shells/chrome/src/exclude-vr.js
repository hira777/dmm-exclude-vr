const list = document.getElementById('list');
const listItem = list.querySelectorAll('li');

listItem.forEach(item => {
  const text = item.querySelector('.txt').innerText;

  if (text.match(/【VR】/)) {
    item.style.display = 'none';
  }
});
