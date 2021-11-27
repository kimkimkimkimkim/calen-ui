import { Dimensions } from "react-native"

export default class Config {
  // アプリ内で使用する色
  static color = {
    main: "#FEA748",
    white: "#FEFEFE",
    red: "#EB6060",
    blue: "#4A89F7",
    textBlack: "#423E3B",
    textGray: "#B7B5B4",
    iconGray: "#C2B9B0",
    backgroundWhite: "#FEFEFE",
    backgroundGray: "#F7F7F7",
    borderGray: "#F7F7F7"
  }

  // 幅
  static width = {
    border: 0.2
  }

  // フォントサイズ
  static fontSize = {
    regular: 12,
  }

  // 画面サイズ
  static screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    scale: Dimensions.get('window').scale,
  }
}