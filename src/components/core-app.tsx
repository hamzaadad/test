import * as React from "react";
import styled from "../theme";
import LoginBox from './login-box';
interface CoreAppProps {
  className?: string;
}

class CoreApp extends React.Component<CoreAppProps, {}> {
  render() {
    return <div className={this.props.className}>
      <LoginBox />
    </div>;
  }
}

const StyledSection = styled(CoreApp)`
  width: 100vw;
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledSection;
