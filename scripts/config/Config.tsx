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
    borderGray: "#F7F7F7",
    eventRed:"#E73B3B",
    eventBlue:"#47B2F7",
    eventGreen:"#2ECC87",
    eventYellow:"#FDC02D",
    eventPurple:"#B38BDB",
  }

  // 幅
  static width = {
    border: 0.5
  }

  // フォントサイズ
  static fontSize = {
    small: 10,
    regular: 12,
    big: 14,
    header: 19,
  }

  static iconSize = {
    header: 24,
    timeline: 18,
  }

  // 画面サイズ
  static screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    scale: Dimensions.get('window').scale,
  }

  // ユニークキー
  static GetUniqueKey(): string {
    let strong = 10000;
    return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16) + Math.floor(strong * Math.random()).toString(16);
  }
}