import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
  mainBackgroundColor: string;
  secondBackgroundColor: string;
  topBarShadow: string;
  textColor: string;
}

export const theme = {
  primaryColor: "#F7F9FA",
  mainBackgroundColor: "#F7F9FA",
  secondBackgroundColor: "#FFFFFF",
  topBarShadow: "0px 3px 10px 0px rgba(165,175,186,0.2)",
  textColor: "#E91D3D",
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
