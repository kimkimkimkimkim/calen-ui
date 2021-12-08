import {
  SCREEN_MODE,
  UI_TYPE,
  SYNCHRONIZE,
  CLEAR,
} from "./types";

//actionオブジェクト
//typeが必須
//あと保存したいkeyとvalueを持つ
export const setScreenMode = (screenMode) => ({
  type: SCREEN_MODE,
  screenMode,
});

export const setUIType = (uiType) => ({
  type: UI_TYPE,
  uiType,
})

export const syncReduxData = () => ({ type: SYNCHRONIZE });

export const clearReduxData = () => ({ type: CLEAR });