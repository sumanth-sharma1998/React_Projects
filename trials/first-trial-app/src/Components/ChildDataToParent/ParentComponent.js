import React,{Component} from 'react';
import { ChildComponent } from './ChildComponent';

export class ParentComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            parent: "Parent"
        }
    }

    FunctionThatisPassedFromParentToChild = ()  => {
        console.log(`Successfully called a ${this.state.parent} function by clicking button in child class`)
    }

    DataFromChildToParent = (DataFromChild) =>{
        console.log(`Successfully got data from ${DataFromChild} to the ${this.state.parent} `)
    }

    render(){
        return(
            <div>
                <ChildComponent passedFn={this.FunctionThatisPassedFromParentToChild} value={true}></ChildComponent>
                <ChildComponent ChildToParentFn={this.DataFromChildToParent} value={false}></ChildComponent>
            </div>
        )
    }
}