import React, {useState} from "react";
import {PostCreate} from './Components/PostCreate'

export const App = () => {

    return <div className={'container'}>
        <h1>Post create</h1>
        <PostCreate/>
    </div>
}