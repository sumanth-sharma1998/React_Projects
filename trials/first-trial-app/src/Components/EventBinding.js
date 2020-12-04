import React,{Component} from 'react';

export class EventBinding extends Component{
    constructor(props){
        super(props);

        this.state = {
            message : "Hello User this is Event Binding"
        }
        this.ChangeTheMessageInConstructor = this.ChangeTheMessageInConstructor.bind(this)
        //Best Approach -3

    }

    // ChangeTheMessage(){
    //     this.setState({
    //         message: "Good bye from Event Binding"
    //     })
    // }
    // THis wont work due to undefined reference to this. 

    ChangeTheMessage = () => {
        this.setState({
            message: "Hello User this is Event Binding"
        })
    }
    // Best Approach also - 4

    ChangeTheMessageUsingBind(){
        this.setState({
            message: "Good bye from Event Binding using Bind"
        })
    }
    // Every update causes rerender - Performance issues -1

    ChangeTheMessageArrowInBody(){  
        this.setState({
            message: "Good bye from Event Binding in Arrow Body"
        })
    }
    // Every update causes rerender - Performance issues but lesser than first -2

    ChangeTheMessageInConstructor(){
        this.setState({
            message: "Good bye from Event Binding in Constructor"
        })
    }
    //Best approach -3

    render(){
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.ChangeTheMessageUsingBind.bind(this)}>Click for ChangeTheMessageUsingBind</button><br/>
                <button onClick={()=>this.ChangeTheMessageArrowInBody()}>Click for ChangeTheMessageArrowInBody</button><br/>
                {/* Parentisis is required as method is called */}
                <button onClick={this.ChangeTheMessageInConstructor}>Click for ChangeTheMessageInConstructor</button><br/>
                <button onClick={this.ChangeTheMessage}>Back</button>
            </div>
        )
    }
}