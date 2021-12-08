import { Action, Dispatch } from 'redux';
import { ScreenMode, UIType } from '../unions';
import {
  setScreenMode,
  setUIType,
  syncReduxData,
  clearReduxData,
} from "./actions"

// ReduxのDispatchをPropsに変換するinterfaceを定義
// メンバにはどのアクションを実行するのかを定義する
export interface IDispatchToProps {
  setScreenMode: (screenMode: ScreenMode) => void;
  setUIType: (uiType: UIType) => void;
  syncReduxData: () => void;
  clearReduxData: () => void;
}

// ReduxのStoreをReactのContainerのPropsに変換するinterfaceを定義
export interface IStateToProps {
  screenMode: ScreenMode,
  uiType: UIType,
}

// Storeが更新されたときに送られてくるStateを受け取り、
// IStateToPropsに変換して返す関数を定義
// state.redux: reducer.INITIAL_STATE
export const mapStateToProps = (state: any): IStateToProps => {
  return {
    screenMode: state.redux.screenMode,
    uiType: state.redux.uiType,
  };
};

// Dispatchを受け取り、IDispatchToPropsの関数でどのアクションをDispatchするのかを定義する
export const mapDispatchToProps = (dispatch: Dispatch<Action>): IDispatchToProps => {
  return {
    setScreenMode: (screenMode: ScreenMode) => dispatch(setScreenMode(screenMode)),
    setUIType: (uiType: UIType) => dispatch(setUIType(uiType)),
    syncReduxData: () => dispatch(syncReduxData()),
    clearReduxData: () => dispatch(clearReduxData()),
  };
};