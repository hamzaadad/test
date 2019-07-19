import * as React from "react";
import styled from "../theme";
import Logo from './logo';
import TopBarCtaBox from './top-bar-cta-box';
interface HeaderProps {
  className?: string;
}

class Header extends React.Component<HeaderProps, {}> {
  render() {
    return <div className={this.props.className}>
      <Logo />
      <TopBarCtaBox /> 
    </div>;
  }
}

const StyledSection = styled(Header)`
  width: 100vw;
  height: 90px;
  background: ${props => props.theme.secondBackgroundColor};
  display:flex;
  align-items: center;
  box-shadow:  ${props => props.theme.topBarShadow};
`;

export default StyledSection;
