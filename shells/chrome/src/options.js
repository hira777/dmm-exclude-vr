import * as chromeStorage from './storage';

const optionExcludeVR = document.getElementById('exclude-vr');

chromeStorage.init().then(() => {
  optionExcludeVR.checked = chromeStorage.isExcludedVR();
  optionExcludeVR.onchange = e => {
    chromeStorage.setIsExcludedVR(e.target.checked).then(() => {
      console.log('updatedIsExcludedVR');
    });
  };
});
