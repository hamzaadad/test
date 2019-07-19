import * as React from "react";
import * as ReactDOM from "react-dom";

import { injectGlobal, ThemeProvider, theme } from "./theme";

import Section from "./components/section";
import Header from "./components/header";
import CoreApp from "./components/core-app";
/*import Quote from "./components/quote";
import QuoteAuthor from "./components/quote-author";*/

injectGlobal`
    * { margin: 0; padding: 0; }
    * { font-family: 'Nunito Sans', sans-serif; }
`;

interface MainWrapperProps {

}

class MainWrapper extends React.Component<MainWrapperProps, {}> {
  render() {
    return (
      <Section>
        <Header/>
        <CoreApp />
      </Section>
    );
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MainWrapper/>
  </ThemeProvider>,
  document.getElementById("app")
);
