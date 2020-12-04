import React from 'react';
import {FriendPerson} from './FriendPerson'

export const ListObjectRenderingBasic = () => {
    const Friends = [{id:1,name:"Joey",age:30},{id:2,name:"Monica",age:31},{id:3,name:"Rachel",age:32},
    {id:4,name:"Chandler",age:33},{id:5,name:"Pheobe",age:34},{id:6,name:"Ross",age:35}]

    // const FriendsList = Friends.map(friend => <p>My name is {friend.name} and age is {friend.age}<br/></p>)
    // return(<div>{FriendsList}</div>)
    // Basic Version


    // The key needs to be passed or else it throughs an error - this prop is not accessible in child component
    const FriendsList = Friends.map(friend => <FriendPerson key={friend.id} friend={friend}></FriendPerson>)
    return(<div>{FriendsList}</div>)
    // Better version - Because this component is only responsible for rendering list - Can be reused

}