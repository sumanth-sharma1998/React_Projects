import React,{Component} from 'react';


export class StateTest extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    CounterCounts = () =>{
        this.setState(prevstate => ({
            counter: prevstate.counter + 1
        }),()=>{console.log("This is a callback value", this.state.counter);})
        
    }

    render(){
        return(<div>
            <p>Hi mate - Click on the button - {this.state.counter}</p>
            <button onClick={()=>this.CounterCounts()}>Click me!!</button>
            </div>
        )
    }
}