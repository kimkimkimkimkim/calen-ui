// クラス内で使用するProps
interface IProps {
  title?: string,
  leftComponent?: React.ReactElement<{}>,
  rightComponent?: React.ReactElement<{}>,
}

// クラス内で使用するState
interface IState{
}

export type Props = IProps;
export type State = IState;