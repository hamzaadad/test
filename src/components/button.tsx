import * as React from "react";
import styled from "../theme";
interface ButtonProps {
  className?: string;
  text?: string;
  bordred?: boolean;
  style?: object;
  callback: ()=>any;
}

class Button extends React.Component<ButtonProps, {}> {
  render() {
    return <div className={this.props.className} style={this.props.style} onClick={()=>{ this.props.callback(); }}>
      {this.props.text}
    </div>;
  }
}

const StyledSection = styled(Button)`
  cursor: pointer;
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  font-size: ${({theme})=> theme.buttonFontSize};
  font-weight: 600;
  display:flex;
  align-items: center;
  padding: ${({theme})=>theme.buttonPadding};
  transition: all ease .2s;
  ${(props) => props.bordred && `
    padding: ${props.theme.buttonActivePadding};
    background: ${props.theme.buttonActiveBg};
    border: ${props.theme.buttonAtviceBorder};
    border-radius: 33px;
    &:hover{
      background: #E91D3D;
      color: #FFF;
    }
  `}
`;

export default StyledSection;
