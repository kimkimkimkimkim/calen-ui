import {
  SCREEN_MODE,
  UI_TYPE,
  SYNCHRONIZE,
  CLEAR,
} from "./types"

//stateの初期値
export const INITIAL_STATE = {
  screenMode: "SelectUITypes",
  uiType: "Simple",
};

//現在のと初期値とを同期する
//現在のreduxDataに存在しないパラメータを追加して初期値をセット
export function getSynchronizedReduxData(reduxData) {
  let synchronizedReduxData = Object.assign({}, reduxData);
  Object.keys(INITIAL_STATE).forEach(key => {
    if (!(key in synchronizedReduxData)) synchronizedReduxData[key] = INITIAL_STATE[key];
  });
  return synchronizedReduxData;
}

//渡されたアクションオブジェクトのtype別でstateを更新
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SCREEN_MODE:
      return Object.assign({}, state, { screenMode: action.screenMode });
    case UI_TYPE:
      return Object.assign({}, state, { uiType: action.uiType });
    case SYNCHRONIZE:
      return getSynchronizedReduxData(state);
    case CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
}