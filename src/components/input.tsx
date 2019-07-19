import * as React from "react";
import styled from "../theme";
interface InputPorps {
    className?: string;
    type?: string;
    label?: string;
    isError: boolean;
    onChange: (value: string)=> any;
}

interface State {
    classList: string[];
    textValue: string;
}

class Input extends React.Component<InputPorps, State> {
    state: Readonly<State> = {
        classList: [],
        textValue: "",
    };
    render() {
        return <div className={[this.props.className, ...this.state.classList].join(" ")}>
            <label className="floating-label">{this.props.label}</label>
            <input type={this.props.type} className="inputbox" style={{ position: 'absolute', width: 460, height: 50, background: 'transparent', outline: 'none', padding: '10px 0', border: 'none' }} 
            onFocus={() => {
                this.setState((current) => ({ ...current, classList: [...current.classList, '--is-active']}))
            }}
            onBlur={()=>{
                if(this.state.textValue.length == 0){
                    this.setState((current) => ({ ...current, classList: current.classList.filter((elm) => elm !== '--is-active')}))
                }
            }} 
            onChange={(event)=>{
                event.persist();
                this.setState((current) => ({ ...current, textValue: event.target.value}))
                this.props.onChange(event.target.value);
            }}
            />
        </div>;
    }
}
// move all inline styles in a class in here
const StyledSection = styled(Input)`
    color: rgba(51, 51, 51, 0.58);
    width: 497px;
    height: 70px;
    margin: 10px 0;
    background: #FFF;
    border-radiuse: 5px;
    box-shadow: 0px 1px 5px 0px rgba(165, 175, 186, 0.42);
    display: flex;
    flex-direction: column;
    justify-content:center;
    padding: 28px 17px;
    box-sizing: border-box;
    position: relative;
    .floating-label{
        transition: all ease 0.3s;
        color:${({isError}) => isError ? "rgba(233, 29, 61, 1);" : "rgba(51, 51, 51, 0.58);"}
    }
    .inputbox{
        font-weight: 700;
        font-size: 18px;
    }
    &.--is-active{
        .floating-label{
            font-size: 14px;
            transform: translateY(-18px);
        }
    }

   

`;

export default StyledSection;
