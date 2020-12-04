import React from 'react';

export const ChildComponent = (props) => {
    
        if(props.value){
            return(
                <div>
                    <button onClick={props.passedFn}>Click to Display Parent Comp Msg</button>
                </div>
            )
        }else{
            return(
            <div>
                <button onClick={()=> props.ChildToParentFn("Child Comp")}>Click to send date from Child to parent using Arrow</button>
            </div>
            )
        }
}