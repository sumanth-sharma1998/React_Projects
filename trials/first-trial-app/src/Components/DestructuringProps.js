import React,{Component} from 'react';

export const DestructuringPropsFn = (props) =>{
    return <p>Hi my name is - {props.name}</p>
}

export const DestructuringPropsFnInParameter= ({name}) =>{
    return <p>Hi my name is - {name}</p>
}

export const DestructuringPropsFnInBody= (props) =>{
    const {name} = props
    return <p>Hi my name is - {name}</p>
}


export class DestructuringPropsClass extends Component{
    render(){
        return <p> Hi My name is {this.props.name}</p>
    }
}

export class DestructuringPropsClassInRender extends Component{
    render(){
        const {name} = this.props
        // const {state1} = this.state
        return <p> Hi My name is {name}</p>
    }
}