import * as chromeStorage from './storage';

const list = document.getElementById('list');
const listItem = list.querySelectorAll('li');

chromeStorage.init().then(() => {
  if (!chromeStorage.isExcludedVR()) return;

  listItem.forEach(item => {
    const text = item.querySelector('.txt').innerText;

    if (text.match(/【VR】/)) {
      item.style.display = 'none';
    }
  });
});
