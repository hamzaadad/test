import * as React from "react";
import styled from "../theme";
interface SectionProps {
  className?: string;
  text?: string;
  bordred?: boolean;
}

class Button extends React.Component<SectionProps, {}> {
  render() {
    return <div className={this.props.className}>
      {this.props.text}
    </div>;
  }
}

const StyledSection = styled(Button)`
  cursor: pointer;
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  display:flex;
  align-items: center;
  padding: 20px;
  transition: all ease .2s;
  ${({ bordred }) => bordred && `
    padding: 18px 40px;
    background: rgba(233, 29, 61, 0.05);
    border: 1px solid #E91D3D;
    border-radius: 33px;
    &:hover{
      background: #E91D3D;
      color: #FFF;
    }
  `}
`;

export default StyledSection;
