import * as React from "react";
import styled from "../theme";
import Button from './button'

interface TopBarCtaBoxProps {
  className?: string;
}

class TopBarCtaBox extends React.Component<TopBarCtaBoxProps, {}> {
  render() {
    return <div className={this.props.className}>
        <Button text="S’identifier" callback={()=>{}}/>
        <Button text="S’inscrire" bordred={true} callback={()=>{}} />
      {/* <Button text="S’identifier" />
      <Button text="S’inscrire" type="bordred" /> */}
    </div>;
  }
}

const StyledSection = styled(TopBarCtaBox)`
  display:flex;
  align-items: center;
  margin-left: auto;
  margin-right: ${({theme})=> theme.merginRighCta}; 
`;

export default StyledSection;
