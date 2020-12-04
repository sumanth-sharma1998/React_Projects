import { render } from '@testing-library/react';
import React,{Component} from 'react';

export const PropsTestFn = (props) =>{
    return <p>Hi my name is -  {props.name}</p>
}

export class PropsTestClass extends Component{
    render(){
        return <p> Hi My name is {this.props.name}</p>
    }
}