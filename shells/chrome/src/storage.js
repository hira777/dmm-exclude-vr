import chromeStorage from './chrome-storage';

const ROOT_KEY = 'dmmExcludeVR';
const OPTIONS_KEY = 'options';
const IS_EXCLUDED_VR_KEY = 'isExcludedVR';

let _storage;

/**
 * 初期化する
 * chromeストレージにデータが存在すれば、それを利用する
 * 存在しなければ初期化したデータをストレージに保存して利用する
 * @returns {Promise<{}>}
 */
export async function init() {
  const storage = await chromeStorage.get(ROOT_KEY);

  if (Object.keys(storage).length === 0) {
    _storage = getInitialStateStorage();
    updateChromeStorage().then(storage => storage);
  } else {
    _storage = { ...storage };
    return _storage;
  }
}

/**
 * 初期状態のストレージを返す
 */
function getInitialStateStorage() {
  const storage = {};

  storage[ROOT_KEY] = {};
  storage[ROOT_KEY][OPTIONS_KEY] = {};
  storage[ROOT_KEY][OPTIONS_KEY][IS_EXCLUDED_VR_KEY] = true;
  return [...storage];
}

/**
 * _storageの状態をchromeストレージに保存する
 * @returns {Promise<any>}
 */
async function updateChromeStorage() {
  await chromeStorage.set(_storage);
}

/**
 * VR商品を除外するかどうか
 * @returns {Boolean}
 */
export function isExcludedVR() {
  return _storage[ROOT_KEY][OPTIONS_KEY][IS_EXCLUDED_VR_KEY];
}

/**
 * VR商品を除外するかどうか（オプション）を更新する
 * @param boolean
 * @returns {Promise<void>}
 */
export async function setIsExcludedVR(boolean) {
  _storage[ROOT_KEY][OPTIONS_KEY][IS_EXCLUDED_VR_KEY] = boolean;
  await updateChromeStorage();
}
