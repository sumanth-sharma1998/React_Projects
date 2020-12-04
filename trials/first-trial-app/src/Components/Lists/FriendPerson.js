import React from 'react';

export const FriendPerson=({friend}) =>{
    return(
        <p>My name is {friend.name} and age is {friend.age}<br/></p>
    )
    //This component is responsible for only rendering the Person object
}