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
  grayColor: string;
  merginRighCta: string;
  marginLeftLogo: string;
  logoHieght: string;
  logoWidth: string;
  buttonFontSize: string;
  buttonPadding: string;
  buttonActiveBg: string;
  buttonActivePadding: string;
  buttonAtviceBorder: string;
  buttonBorderColor: string;
}

export const theme = {
  primaryColor: "#F7F9FA",
  mainBackgroundColor: "#F7F9FA",
  secondBackgroundColor: "#FFFFFF",
  topBarShadow: "0px 3px 10px 0px rgba(165,175,186,0.2)",
  textColor: "#E91D3D",
  grayColor: "rgba(211, 211, 211, 1)",
  merginRighCta: "108px",
  marginLeftLogo: "100px",
  logoHieght: '29px',
  logoWidth: '144px',
  buttonFontSize: '15px',
  buttonPadding: '20px',
  buttonActivePadding: '18px 40px',
  buttonAtviceBorder: '1px solid #E91D3D',
  buttonActiveBg: 'rgba(233, 29, 61, 0.05)',

};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
