import { NavigationHelpers, ParamListBase } from "@react-navigation/core";
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

// navigation.navigate()で渡されるProps
interface NavigationProps {
  // stackOnMainTabNavigation
  stackOnMainTabNavigation: NavigationHelpers<ParamListBase>,
}

// navigation.navigate()で渡されるProps（遷移先の画面のStateで保持する）
interface NavigationPropsForState {
}

// クラス内で使用するProps
interface IProps {
  navigation: NavigationHelpers<ParamListBase & NavigationProps>,
}

// クラス内で使用するState
interface IState{
}

export type Props = IProps & NativeStackNavigationOptions;
export type State = IState & NavigationPropsForState;
export type HomeScreenNavigationRequest = NavigationProps & NavigationPropsForState;