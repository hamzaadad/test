import * as React from "react";
import styled from "../theme";
import Button from './button'

interface SectionProps {
  className?: string;
}

class TopBarCtaBox extends React.Component<SectionProps, {}> {
  render() {
    return <div className={this.props.className}>
        <Button text="S’identifier" />
        <Button text="S’inscrire" bordred={true} />
      {/* <Button text="S’identifier" />
      <Button text="S’inscrire" type="bordred" /> */}
    </div>;
  }
}

const StyledSection = styled(TopBarCtaBox)`
  display:flex;
  align-items: center;
  margin-left: auto;
  margin-right: 108px;
`;

export default StyledSection;
