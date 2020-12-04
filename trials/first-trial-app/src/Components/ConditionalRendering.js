import {Component} from 'react';

export class ConditionalRendering extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    LogoutHandler = () =>{
        this.setState({
            isLoggedIn: false
        },()=>console.log("Logged out now"))
    }

    LoginHandler = () =>{
        this.setState({
            isLoggedIn: true
        },()=>console.log("Logged in now"))
    }

    render(){
        if(this.state.isLoggedIn){
            return <button onClick={this.LogoutHandler}>Logout</button>
        }
        else{
            return <button onClick={this.LoginHandler}>Login</button>
        }
        // 1- If else in returning the objects to render

        // let message;
        // if(this.state.isLoggedIn){
        //     message=  <button onClick={this.LogoutHandler}>Logout</button>
        // }
        // else{
        //     message= <button onClick={this.LoginHandler}>Login</button>
        // }
        // return message
        // 2 - Element method - Using a common variable to store and then return

        // return ((this.state.isLoggedIn)? <button onClick={this.LogoutHandler}>Logout</button>:
        // <button onClick={this.LoginHandler}>Login</button>) 
        // 3 -  ternary operator

        // return (this.state.isLoggedIn && <button onClick={this.LogoutHandler}>Logout</button>)
        // 4- When nothing has to be displayed in else condition

    }
}

