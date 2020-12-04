import React,{Component} from 'react';

const ClickButtonFn = () =>{
    console.log("Button Clicked from function");
}

// export const EventHandlingFnWithString = () =>{
//     return <button onClick="ClickButtoFn()">Click this for EventHandlingFnWithString </button>
//     }
//This wont Work in react as for JSX variable needs to be passed not the string


export const EventHandlingFnWithVariable = () =>{
    return <button onClick={ClickButtonFn}>Click this for EventHandlingFnWithString </button>
    //Don't use {ClickButtonFn()} this will call the funciton even before the button is clicked - on page load
    }

export class EventHandlingClass extends Component{
    ClickButtonClass = () =>{
        console.log("Button Clicked from Class");
    }
    render(){
        return<button onClick={this.ClickButtonClass}>Click this for EventHandlingClass</button>
    }
}
