import React from 'react';

export const ListRenderingBasic = () =>{
    const Friends = ["Joey","Monica","Rachel","Chandler","Pheobe","Ross"]
    // return(
    //     <div>
    //         {
    //             Friends.map(friend => <p>My name is {friend}<br/></p>)
    //         }
    //     </div>

    // )
    // Basic version

    const FriendsList = Friends.map((friend,index) => <p key={index}>My name is {friend} i am at Index - {index}<br/></p>)
    // Using index as key works but not an efficient method
    /*
    can only be used if
    1. Items dont have an unique id
    2. items are static - no addition and deletion will be done
    3. No filtering or ordering will be done
    This is because if it is index based it will not sort properly and adding elements from top/bottom may be effected completely
    */
    return(<div>{FriendsList}</div>)
    // Better Version - Only the retuening way not the use of index
}