import { AlbumInfo } from "../../data"

// クラス内で使用するProps
interface IProps {
  // アルバム情報
  album: AlbumInfo,
}

// クラス内で使用するState
interface IState{
}

export type Props = IProps;
export type State = IState;