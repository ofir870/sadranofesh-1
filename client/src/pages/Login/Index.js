import React, {useState,useContext} from 'react';
import { UserContext } from '../../model/context/userContext';

export function Index(){

  const context = useContext(UserContext)
    return (
    <div>{context}</div>
    )
}