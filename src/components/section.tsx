import * as React from "react";

import styled from "../theme";

interface SectionProps {
  className?: string;
}

class Section extends React.Component<SectionProps, {}> {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

const StyledSection = styled(Section)`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.mainBackgroundColor};
  display:flex;
  flex-direction: column;
`;

export default StyledSection;
