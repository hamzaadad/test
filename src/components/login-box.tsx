import * as React from "react";
import http from '../utils/http';
import styled from "../theme";
import Button from './button';
import Input from './input';
import { throws } from "assert";
interface LoginBoxProps {
    className?: string;
}
interface State {
    loadingState: boolean;
    classList: string[];
    isLoged: boolean;
    doLogin: boolean;
    userData?: IUser;
    email?: string;
    password?: string;
    isError: boolean;
    showElements: boolean;
}
interface IUser {
    name?: string;
    surname?: string;
    region?: string;
    age?: number;
    photo?: string;
}
class LoginBox extends React.Component<LoginBoxProps, State> {
    state: Readonly<State> = {
        classList: [],
        loadingState: false,
        isLoged: false,
        doLogin: false,
        isError: false,
        showElements: false,
        userData: null,
    };

    randomSentensGenerator(): String{
        let verbs, nouns, adjectives, adverbs, preposition;
            nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
            verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
            adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
            adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
            preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];
        const rand1 = Math.floor(Math.random() * 10);
        const rand2 = Math.floor(Math.random() * 10);
        const rand3 = Math.floor(Math.random() * 10);
        const rand4 = Math.floor(Math.random() * 10);
        const rand5 = Math.floor(Math.random() * 10);
        const rand6 = Math.floor(Math.random() * 10);
        return ("The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".");
    }
    validateEntries(): boolean{
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return this.state.email !== undefined && this.state.email.length > 0 && regexp.test(this.state.email) && this.state.password !== undefined  && this.state.password.length > 0;
    }
    async getUser(): Promise<void> {

        const data = await new Promise((resolve) => {
            fetch("https://uinames.com/api/?ext")
                .then(response => response.json())
                .then(body => {
                    resolve(body);
                });
        });
        this.setState({
            isLoged: true,
            classList: ['is-logged']
            userData: {
                name: data.name,
                surname: data.surname,
                region: data.region,
                age: data.age,
                photo: data.photo
            }
        });

        // this a bad code just for the sake of the animation
        setTimeout(()=>{
            this.setState({
                showElements: true
            })
        }, 200);
    }
    render() {
        return <div className={[this.props.className, ...this.state.classList].join(" ")}>
            {
                this.state.loadingState && !this.state.isLoged && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            }
            {
                !this.state.doLogin && !this.state.isLoged && <>
                    <h3 className="title ">Connecter-vous à votre compte</h3>
                    {
                        this.state.isError && <div className="error-message">Une erreur est survenue</div>
                    }
                    <Input className="inputs " type="text" label="Email" isError={this.state.isError} onChange={(value)=> this.setState({email:value})} />
                    <Input className="inputs " type="password" label="Password"  isError={this.state.isError} onChange={(value)=> this.setState({password: value})} />
                    <Button className="" bordred={true} text="S’identifier" style={{ marginTop: 30 }} callback={() => {
                        // TODO: some check on the inputes
                        if(this.validateEntries()){
                            this.setState((current) => ({ ...current, loadingState: true, doLogin: true, classList: ["loading-state"] }));
                            this.getUser();
                        }else{
                            this.setState({
                                isError: true
                            })
                            // TODO: show error
                        }
                        
                    }} />
                    <a href="#" className="forgot-link ">Mot de passe oublier ?</a>
                </>
            }

            {
                this.state.isLoged && <>
                    <div className={["avatar-wrapper", this.state.showElements ? "show" : "" ].join(" ")}>
                        <img src={this.state.userData.photo} className="avatar" />
                    </div>
                    
                    <div className={["info-section", this.state.showElements ? "show" : "" ].join(" ")}>
                        <div className="name">{`${this.state.userData.name} ${this.state.userData.surname}, ${this.state.userData.age}`}</div>
                        <div className="location">{`${this.state.userData.region}`}</div>
                        <div className="desc">{this.randomSentensGenerator()}</div>
                        <span className="devider"></span>
                    </div>

                    
                    <Button className={["bottom-inputs", this.state.showElements ? "show" : "" ].join(" ")} bordred={true} text="Voir Profile" style={{ marginTop: 30 }} callback={() => {}} />
                    <Button className={["bottom-inputs", this.state.showElements ? "show" : "" ].join(" ")} text="Supprimer le profile" callback={() => { }} />
                </>
            }

        </div>;
    }
}

const StyledSection = styled(LoginBox)`
  width: 560px;
  height: 478px;
  padding: 40px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 3px 10px 0px rgba(165, 175, 186, 0.16);
  transition: all ease 0.3s .3s;
  .forgot-link{
      flex: 1;
      margin: 30px; 
      textDecoration: 'underline';
      color: rgba(245, 88, 113, 1)
  }
  .title{
      flex: 1
  }
  .hideable-before-login{
    transition: opacity ease 0.2s;
  }
  
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    opacity: 0;
    transition: opacity ease 0.2s .3s;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: rgba(233, 29, 61, 1);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
 
  &.loading-state{
    
    width: 200px;
    height: 140px;
    .lds-ellipsis {
        opacity:1
    }
    
  }
  .avatar-wrapper{
      flex:1;
      opacity: 0;
      transition: all ease .3s .3s;
      &.show{
        opacity:1;
        margin-top: -100px;
      }
  }
  .bottom-inputs{
      opacity: 0;
      transition: all ease .3s 1s;
      &.show{
        opacity: 1
      }
  }
  .avatar{
    border-radius: 50%;
    width: 150px;
    height: 150px;
    opacity: 0;
    translate: all ease .3s .6s;
      
  }
  .devider{
    height: 1px;
    width: 60px;
    background: ${({theme}) => theme.grayColor};
  }

  .info-section{
    transition: all ease .3s .6s;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    &.show{
        opacity: 1;
    }
    .name{
        font-size: 18px;
        font-weight: 700;
        margin: 20px 20px 10px 20px;
    }
    .desc{
        padding: 10px;   
        text-align: center;
        margin-bottom: 20px;
    }
  }
  &.is-logged{
    width:434px;
    height: 478px
    
    .avatar{
        
        opacity: 1;
    }
  }
  .error-message{
      color: rgba(233, 29, 61, 1);
      padding: 10px;
  }
`;

export default StyledSection;
