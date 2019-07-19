import * as React from "react";
import styled from "../theme";
import logo from './imgs/logo.png';
interface SectionProps {
  className?: string;
}

class Logo extends React.Component<SectionProps, {}> {
  render() {
    return <img  className={this.props.className} src={logo} />;
  }
}

const StyledSection = styled(Logo)`
  height: ${({theme})=> theme.logoHieght};
  width: ${({theme})=> theme.logoWidth};
  margin-left: ${({theme})=> theme.marginLeftLogo};
`;

export default StyledSection;
